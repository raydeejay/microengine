Smalltalk createPackage: 'Microengine'!
(Smalltalk packageAt: 'Microengine' ifAbsent: [ self error: 'Package not created: Microengine' ]) imports: {'PIXI' -> 'pixi'. './Microengine-Keyboard'. 'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #Action
	slots: {}
	package: 'Microengine'!

!Action methodsFor: 'executing'!

execute
	self subclassResponsibility
!

executeOn: aSession
	self subclassResponsibility
! !

!Action methodsFor: 'queueing'!

shouldRequeue
	^ false
! !

!Action class methodsFor: 'accessing'!

classTag
	"Returns a tag or general category for this class.
	Typically used to help tools do some reflection.
	Helios, for example, uses this to decide what icon the class should display."
	
	^ 'announcement'
! !

Action subclass: #CodeAction
	slots: {#time. #elapsedTime. #block}
	package: 'Microengine'!

!CodeAction methodsFor: 'accessing'!

block
	^ block
!

block: anObject
	block := anObject
! !

!CodeAction methodsFor: 'executing'!

executeOn: aSession
	"Executes the block, passing itself and the session to it, in case it wants access to the action itself."
	block value: self value: aSession
! !

!CodeAction class methodsFor: 'instance creation'!

do: aBlock
	^ self new
		block: aBlock;
		yourself
! !

Action subclass: #DelayedAction
	slots: {#time. #elapsedTime. #block}
	package: 'Microengine'!

!DelayedAction methodsFor: 'accessing'!

block
	^ block
!

block: anObject
	block := anObject
!

elapsedTime
	^ elapsedTime
!

elapsedTime: anObject
	elapsedTime := anObject
!

initialize
	time := 0.
	elapsedTime := 0
!

time
	^ time
!

time: anObject
	time := anObject
! !

!DelayedAction methodsFor: 'executing'!

executeOn: aSession
	"Executes the block, passing itself and the session to it, in case it wants access to the action itself."
	elapsedTime := elapsedTime + 1.
	elapsedTime = time ifTrue: [ block value: self value: aSession ]
! !

!DelayedAction methodsFor: 'queueing'!

shouldRequeue
	^ elapsedTime < time
! !

!DelayedAction class methodsFor: 'instance creation'!

for: someFrames do: aBlock
	^ self new
		time: someFrames;
		block: aBlock;
		yourself
! !

Action subclass: #DestroyAction
	slots: {#sprite}
	package: 'Microengine'!

!DestroyAction methodsFor: 'accessing'!

sprite
	^ sprite
!

sprite: anObject
	sprite := anObject
! !

!DestroyAction methodsFor: 'executing'!

executeOn: aSession
	| spr |
	
	aSession nodes keysAndValuesDo: [ :k :v | v = self sprite ifTrue: [ aSession nodes remove: k ] ].
	aSession app app stage removeChild: self sprite sprite.
	"self sprite die"
! !

!DestroyAction class methodsFor: 'as yet unclassified'!

on: aSprite
	^ self new
		sprite: aSprite;
		yourself
! !

Action subclass: #HealthAction
	slots: {#amount}
	package: 'Microengine'!

!HealthAction methodsFor: 'accessing'!

amount
	^ amount
!

amount: anObject
	amount := anObject
! !

!HealthAction methodsFor: 'executing'!

executeOn: aSession
	aSession health: aSession health + self amount.
	(aSession nodes at: #health) text: 'Health: ', aSession health.
	console log: 'Health: ', aSession health
! !

!HealthAction class methodsFor: 'instance creation'!

worth: aNumber
	^ self new amount: aNumber
! !

Action subclass: #MessageAction
	slots: {#x. #y. #kind. #key. #text}
	package: 'Microengine'!

!MessageAction methodsFor: 'accessing'!

key
	^ key
!

key: anObject
	key := anObject
!

style
	^ #{#fontFamily -> 'Arial'. #fontSize -> 24. #fill -> 16rff1010. #align -> 'center'}
!

text
	^ text
!

text: anObject
	text := anObject
!

x
	^ x
!

x: anObject
	x := anObject
!

y
	^ y
!

y: anObject
	y := anObject
! !

!MessageAction methodsFor: 'executing'!

executeOn: aSession
	| txt |
	
	txt := (Libs pixi Text newValue: self text value: Microengine hudStyle).
	aSession app stage addChild: txt.
	^ aSession nodes
		at: self key put: ((TextMessage on: txt)
			x: self x;
			y: self y;
			yourself)
! !

!MessageAction class methodsFor: 'instance creation'!

key: aKey text: aString x: anX y: aY
	^ self new
		key: aKey;
		text: aString;
		x: anX;
		y: aY;
		yourself
!

text: aString x: anX y: aY
	^ self key: Microengine instance session getRandomKey text: aString x: anX y: aY
! !

Action subclass: #MoveAction
	slots: {#sprite. #dx. #dy}
	package: 'Microengine'!

!MoveAction methodsFor: 'accessing'!

dx
	^ dx
!

dx: anObject
	dx := anObject
!

dy
	^ dy
!

dy: anObject
	dy := anObject
!

sprite
	^ sprite
!

sprite: anObject
	sprite := anObject
! !

!MoveAction methodsFor: 'executing'!

executeOn: aSession
	self sprite move: self
! !

!MoveAction class methodsFor: 'accessing'!

on: aSprite dx: aDeltaX
	^ self new
		sprite: aSprite;
		dx: aDeltaX;
		yourself
!

on: aSprite dx: aDeltaX dy: aDeltaY
	^ self new
		sprite: aSprite;
		dx: aDeltaX;
		dy: aDeltaY;
		yourself
!

on: aSprite dy: aDeltaY
	^ self new
		sprite: aSprite;
		dy: aDeltaY;
		yourself
! !

Action subclass: #ScoreAction
	slots: {#amount}
	package: 'Microengine'!

!ScoreAction methodsFor: 'accessing'!

amount
	^ amount
!

amount: anObject
	amount := anObject
! !

!ScoreAction methodsFor: 'executing'!

executeOn: aSession
	aSession score: aSession score + self amount.
	(aSession nodes at: #score) text: 'Score: ', aSession score.
	console log: 'Score: ', aSession score
! !

!ScoreAction class methodsFor: 'instance creation'!

worth: aNumber
	^ self new amount: aNumber
! !

Action subclass: #SpawnAction
	slots: {#x. #y. #kind. #key. #texture. #forced. #fuzzy}
	package: 'Microengine'!

!SpawnAction methodsFor: 'accessing'!

beForced
	forced := true
!

beFuzzy
	fuzzy := true
!

key
	^ key
!

key: anObject
	key := anObject
!

kind
	^ kind
!

kind: anObject
	kind := anObject
!

texture
	^ texture
!

texture: anObject
	texture := anObject
!

x
	^ x
!

x: anObject
	x := anObject
!

y
	^ y
!

y: anObject
	y := anObject
! !

!SpawnAction methodsFor: 'executing'!

executeOn: aSession
	"only spawn things if the space is empty"
	| cellContents |

	cellContents := (aSession grid atPoint: self x @ self y).
	(cellContents isNil or: [ forced ]) ifTrue: [
		| spr obj |
		
		spr := (Libs pixi Sprite newValue: (aSession app assets at: self texture) texture).
		obj := ((self kind on: spr)
				x: self x;
				y: self y;
				yourself).
		cellContents ifNotNil: [ aSession app stage removeChild: cellContents sprite ].
		aSession grid atPoint: self x @ self y put: obj.
		aSession app stage addChild: spr.
		aSession nodes at: self key put: obj ]
!

initialize
	super initialize.
	fuzzy := false.
	forced := false
! !

!SpawnAction class methodsFor: 'instance creation'!

key: aKey kind: aClass texture: aTexture x: anX y: aY
	^ self new
		key: aKey;
		kind: aClass;
		texture: aTexture;
		x: anX;
		y: aY;
		yourself
!

kind: aClass texture: aTexture x: anX y: aY
	^ self key: Microengine instance session getRandomKey kind: aClass texture: aTexture x: anX y: aY
! !

Action subclass: #TimerAction
	slots: {#time. #elapsedTime. #block}
	package: 'Microengine'!

!TimerAction methodsFor: 'accessing'!

block
	^ block
!

block: anObject
	block := anObject
!

elapsedTime
	^ elapsedTime
!

elapsedTime: anObject
	elapsedTime := anObject
!

initialize
	time := 0.
	elapsedTime := 0
!

time
	^ time
!

time: anObject
	time := anObject
! !

!TimerAction methodsFor: 'executing'!

executeOn: aSession
	"Executes the block, passing itself and the session to it, in case it wants access to the action itself."
	block value: self value: aSession.
	elapsedTime := elapsedTime + 1
! !

!TimerAction methodsFor: 'queueing'!

shouldRequeue
	^ elapsedTime < time
! !

!TimerAction class methodsFor: 'instance creation'!

for: someFrames do: aBlock
	^ self new
		time: someFrames;
		block: aBlock;
		yourself
! !

Object subclass: #GameSession
	slots: {#nodes. #app. #explorer. #treasure. #actions. #score. #health. #grid}
	package: 'Microengine'!

!GameSession methodsFor: 'accessing'!

actions
	^ actions ifNil: [ actions := Queue new ]
!

app
	^ app
!

app: anObject
	app := anObject
!

getRandomKey
	| str |
	
	[ nodes includesKey: (str := String random) ] whileTrue.
	^ str
!

grid
	^ grid
!

health
	^ health
!

health: aNumber
	health := aNumber
!

nodes
	^ nodes
!

score
	^ score
!

score: aNumber
	score := aNumber
! !

!GameSession methodsFor: 'action'!

gameLoop: aDelta
	"do something :-D"
	nodes do: [ :each | each update ].
	self checkCollisions.
	self executeActions.
	health < 1 ifTrue: [ self stop ]
!

start
	app ticker add: [ :delta | self gameLoop: delta ]
!

stop
	app ticker stop
! !

!GameSession methodsFor: 'colliding'!

checkCollisions
	nodes keysAndValuesDo: [ :outerKey :outerEach |
		nodes keysAndValuesDo: [ :innerKey :innerEach |
			((innerKey ~= outerKey
				and: [ innerEach collidesWith: outerEach ])
					and: [ innerEach overlaps: outerEach ])
						ifTrue: [
							console log: '#', innerKey, ' colliding with #', outerKey.
							innerEach collideWith: outerEach on: self ] ] ]
! !

!GameSession methodsFor: 'initialization'!

initialize
	score := 0.
	health := 100.
	grid := Grid size: app stage width @ app stage height cellSize: 32@32.
	nodes := Dictionary new
!

setup
	self setupGameElements setupHUD setupKeys
!

setupGameElements
	self addTreasure.
	self addWalls.
	self addExplorer
!

setupHUD
	nodes addAll: #{
			#score -> self addScore.
			#health -> self addHealth };
		yourself
!

setupKeys
	Key
		code: 37 onPress: [ self enqueue: (MoveAction on: (nodes at: #explorer) dx: -5) ] onRelease: [ ];
		code: 39 onPress: [ self enqueue: (MoveAction on: (nodes at: #explorer) dx: 5) ] onRelease: [ ];
		code: 38 onPress: [ self enqueue: (MoveAction on: (nodes at: #explorer) dy: -5) ] onRelease: [ ];
		code: 40 onPress: [ self enqueue: (MoveAction on: (nodes at: #explorer) dy: 5) ] onRelease: [ ]
! !

!GameSession methodsFor: 'queueing'!

enqueue: anAction
	^ self actions nextPut: anAction
!

executeActions
	| action newQueue |
	
	newQueue := Queue new.
	[ (action := self actions nextIfAbsent: [ ]) notNil ]
		whileTrue: [
			action executeOn: self.
			action shouldRequeue ifTrue: [ newQueue nextPut: action ] ].
	actions := newQueue
! !

!GameSession methodsFor: 'sprites'!

addCoin
	| pos |
	
	pos := grid clampPoint: app renderer width atRandom @ app renderer height atRandom.
	self enqueue: (SpawnAction kind: Coin texture: #coin x: pos x y: pos y)
!

addExplorer
	| pos |
	
	pos := grid clampPoint: (app renderer width / 2) @ (app renderer height / 2).
	self enqueue: (SpawnAction key: #explorer kind: Explorer texture: #explorer x: pos x y: pos y) beForced
!

addHealth
	| spr |
	
	spr := (Libs pixi Text newValue: 'Health' value: Microengine hudStyle).
	spr x: 8; y: 40.
	app app stage addChild: spr.
	^ TextMessage on: spr
!

addScore
	| spr |
	
	spr := (Libs pixi Text newValue: 'Score' value: Microengine hudStyle).
	spr x: 8; y: 8.
	app app stage addChild: spr.
	^ TextMessage on: spr
!

addSlime
	| pos |
	
	pos := grid clampPoint: app renderer width atRandom @ app renderer height atRandom.
	self enqueue: (SpawnAction kind: Slime texture: #slime x: pos x y: pos y)
!

addSpawner
	| pos |
	
	pos := grid clampPoint: app renderer width atRandom @ app renderer height atRandom.
	self enqueue: (SpawnAction kind: Spawner texture: #coin x: pos x y: pos y)
!

addTime
	| spr |
	
	spr := (Libs pixi Text newValue: 'Time:' value: Microengine hudStyle).
	spr x: app renderer width - spr width - 8; y: 8.
	app app stage addChild: spr.
	^ TextMessage on: spr
!

addTreasure
	| pos |
	
	pos := grid clampPoint: app renderer width atRandom @ app renderer height atRandom.
	self enqueue: (SpawnAction key: #treasure kind: Treasure texture: #treasure x: pos x y: pos y) beForced
!

addWalls
	15 timesRepeat: [
		| pos |

		pos := grid clampPoint: app renderer width atRandom @ app renderer height atRandom.
		self enqueue: (SpawnAction kind: Wall texture: #wall x: pos x y: pos y) ]
! !

!GameSession class methodsFor: 'instance creation'!

on: anApplication
	^ self basicNew
		app: anApplication;
		initialize;
		yourself
! !

Object subclass: #Grid
	slots: {#width. #height. #cellWidth. #cellHeight. #contents}
	package: 'Microengine'!
!Grid commentStamp!
I represent a grid over a rectangular area.

I can translate between cell and point coordinates.!

!Grid methodsFor: 'accessing'!

cellHeight
	^ cellHeight
!

cellHeight: anObject
	cellHeight := anObject
!

cellWidth
	^ cellWidth
!

cellWidth: anObject
	cellWidth := anObject
!

height
	^ height
!

height: anObject
	height := anObject
!

width
	^ width
!

width: anObject
	width := anObject
! !

!Grid methodsFor: 'calculating'!

cellForPoint: aPoint
	^ ((aPoint x - 1 / cellWidth) floor + 1) @ ((aPoint y - 1 / cellHeight) floor + 1)
!

clampPoint: aPoint
	^ self pointForCell: (self cellForPoint: aPoint)
!

heightInCells
	^ (height / cellHeight) floor
!

pointForCell: aCell
	^ ((aCell x - 1 * cellWidth) + 1) @ ((aCell y - 1 * cellHeight) + 1)
!

sizeInCells
	^ self horizontalCells @ self verticalCells
!

widthInCells
	^ (width / cellWidth) floor
! !

!Grid methodsFor: 'grid'!

at: aCell
	^ contents at: aCell ifAbsent: [ ]
!

at: aCell put: anObject
	^ contents at: aCell put: anObject
!

atPoint: aPoint
	^ contents at: (self cellForPoint: aPoint) ifAbsent: [ ]
!

atPoint: aPoint put: anObject
	^ contents at: (self cellForPoint: aPoint) put: anObject
!

clear: aCell
	contents removeKey: aCell ifAbsent: [ ]
!

clearPoint: aPoint
	contents removeKey: (self cellForPoint: aPoint) ifAbsent: [ ]
! !

!Grid methodsFor: 'initialization'!

initialize
	contents := Dictionary new
! !

!Grid class methodsFor: 'instance creation'!

new
	self error: 'Use #size:cellSize: to create ', self class name, ' instances'
!

size: aSize cellSize: aCellSize
	^ self basicNew
		width: aSize x;
		height: aSize y;
		cellWidth: aCellSize x;
		cellHeight: aCellSize y;
		initialize;
		yourself
! !

Object subclass: #Libs
	slots: {}
	package: 'Microengine'!

!Libs class methodsFor: 'accessing'!

pixi
	^ PIXI
! !

Object subclass: #Microengine
	slots: {#app. #resources. #loader. #renderer. #stage. #assets. #session. #ticker}
	package: 'Microengine'!

!Microengine methodsFor: 'accessing'!

app
	^ app
!

assets
	^ assets
!

loader
	^ loader
!

renderer
	^ renderer
!

session
	^ session
!

stage
	^ stage
!

ticker
	^ ticker
! !

!Microengine methodsFor: 'action'!

doJQueryAppend
	'#output-list' asJQuery append: '<li>jQuery append added me!!</li>'
! !

!Microengine methodsFor: 'resources'!

postload
	assets := loader resources.
	session := GameSession on: self.
	session setup start
!

preload
	self resources keysAndValuesDo: [ :k :v | loader add: k file: v ]
!

resources
	^ #{
		#treasure -> 'images/treasure.png'.
		#explorer -> 'images/explorer.png'.
		#slime -> 'images/slime.png'.
		#wall -> 'images/wall.png'.
		#coin -> 'images/coin_stack.png'
	}
!

setup
	app := Libs pixi Application new.
	document body appendChild: app view.

	loader := app loader.
	ticker := app ticker.
	renderer := app renderer.
	stage := app stage.
	self preload.
	loader load: [ self postload ]
! !

!Microengine methodsFor: 'starting'!

augmentPage
	'#amber-with'asJQuery click: [ self session addCoin. self session addSlime ].
	'#silk-tag' asJQuery click: [ self session addSpawner ].
	'#jquery-append' asJQuery click: [
			self session enqueue: (TimerAction for: 60 do: [
				self session enqueue: (MoveAction on: (Microengine instance session nodes at: #explorer) dx: 3) ]) ].
	self setup
! !

Microengine class slots: {#instance}!

!Microengine class methodsFor: 'constants'!

hudStyle
	^ #{#fontFamily -> 'Arial'. #fontSize -> 24. #fill -> 16rff1010. #align -> 'center'}
! !

!Microengine class methodsFor: 'starting'!

instance
	^ instance
!

start
	instance := self new.
	instance augmentPage
! !

Object subclass: #Sprite
	slots: {#sprite. #dx. #dy}
	package: 'Microengine'!
!Sprite commentStamp!
I wrap around a Pixi.js Sprite or Sprite-like object.

I provide methods to access the underlying sprite's properties and methods, and implement my own.!

!Sprite methodsFor: 'accessing'!

dx
	^ dx
!

dx: anObject
	dx := anObject
!

dy
	^ dy
!

dy: anObject
	dy := anObject
!

sprite
	^ sprite
!

sprite: anObject
	sprite := anObject
!

x
	^ sprite x
!

x: anObject
	sprite x: anObject
!

y
	^ sprite y
!

y: anObject
	sprite y: anObject
! !

!Sprite methodsFor: 'action'!

bringToFront
	sprite parent ifNotNil: [ :parent |
		 parent
		 	removeChild: sprite;
		 	addChild: sprite ]
!

stop
	self dx: 0; dy: 0
! !

!Sprite methodsFor: 'colliding'!

collideWith: aSprite on: aSession
!

collidesWith: aSprite
	"Return true if this sprite is supposed to collide with aSprite. By default Sprites will not collide."
	^ false
!

overlaps: aSprite
	^ self sprite x <= (aSprite sprite x + aSprite sprite width)
		and: [ aSprite sprite x <= (self sprite x + self sprite width)
			and: [ self sprite y <= (aSprite sprite y + aSprite sprite height)
				and: [ aSprite sprite y <= (self sprite y + self sprite height) ] ] ]
! !

!Sprite methodsFor: 'initialization'!

initialize
	dx := 0.
	dy := 0
! !

!Sprite methodsFor: 'updating'!

move: aMoveAction
	aMoveAction dx ifNotNil: [ :n | self dx: self dx + n ].
	aMoveAction dy ifNotNil: [ :n | self dy: self dy + n ]
!

update
	"implement/override if necessary"
	sprite x: sprite x + dx.
	dx := dx * 0.9.
	sprite y: sprite y + dy.
	dy := dy * 0.9.
	dx abs < 0.1 ifTrue: [ dx := 0 ].
	dy abs < 0.1 ifTrue: [ dy := 0 ]
! !

!Sprite class methodsFor: 'instance creation'!

on: aSprite
	^ self basicNew
		sprite: aSprite;
		initialize;
		yourself
! !

Sprite subclass: #Coin
	slots: {}
	package: 'Microengine'!

!Coin methodsFor: 'colliding'!

collideWith: aSprite on: aSession
	aSession
		enqueue: (DestroyAction on: self);
		enqueue: (ScoreAction worth: 10)
!

collidesWith: aSprite
	^ aSprite class = Explorer
! !

Sprite subclass: #Explorer
	slots: {}
	package: 'Microengine'!

!Explorer methodsFor: 'colliding'!

collidesWith: aSprite
	^ false
! !

Sprite subclass: #Slime
	slots: {}
	package: 'Microengine'!

!Slime methodsFor: 'colliding'!

collideWith: aSprite on: aSession
	aSession
		enqueue: (DestroyAction on: self);
		enqueue: (ScoreAction worth: 10);
		enqueue: (HealthAction worth: -10);
		enqueue: (MoveAction on: aSprite dx: aSprite dx negated * 2 dy: aSprite dy negated * 2).
	1 to: 5 do: [ :i | aSession enqueue: (DelayedAction for: 12 * i do: [ aSession addCoin ]) ]
!

collidesWith: aSprite
	^ aSprite class = Explorer
! !

Sprite subclass: #Spawner
	slots: {#remainingTime. #time}
	package: 'Microengine'!

!Spawner methodsFor: 'accessing'!

remainingTime
	^ remainingTime
!

remainingTime: anObject
	remainingTime := anObject
!

time
	^ time
!

time: anObject
	time := anObject
! !

!Spawner methodsFor: 'initialization'!

initialize
	time := 60.
	remainingTime := time
! !

!Spawner methodsFor: 'updating'!

update
	remainingTime := remainingTime - 1.
	remainingTime isZero
		ifTrue: [
			| session renderer |
			
			session := Microengine instance session.
			renderer := Microengine instance renderer.
			session enqueue: (SpawnAction kind: Slime texture: #slime x: renderer width atRandom y: renderer height atRandom).
			remainingTime := time ]
! !

!Spawner class methodsFor: 'instance creation'!

newWithInterval: aNumber
	^ self new
		time: aNumber;
		remainingTime: aNumber;
		yourself
! !

Sprite subclass: #TextMessage
	slots: {}
	package: 'Microengine'!

!TextMessage methodsFor: 'accessing'!

text
	^ sprite text
!

text: aString
	sprite text: aString
!

update
	super update.
	self bringToFront
! !

Sprite subclass: #Treasure
	slots: {}
	package: 'Microengine'!

!Treasure methodsFor: 'colliding'!

collideWith: aSprite on: aSession
	aSession
		enqueue: (DestroyAction on: self);
		enqueue: (ScoreAction worth: 25);
		enqueue: (CodeAction do: [ aSession nodes at: #treasure put: aSession addTreasure ]).
	1 to: 5 do: [ :i | aSession enqueue: (DelayedAction for: 12 * i do: [ aSession addSlime ]) ]
!

collidesWith: aSprite
	^ aSprite class = Explorer
! !

Sprite subclass: #Wall
	slots: {}
	package: 'Microengine'!

!Wall methodsFor: 'colliding'!

collideWith: aSprite on: aSession
	aSession enqueue: (MoveAction on: aSprite dx: aSprite dx negated * 2 dy: aSprite dy negated * 2)
!

collidesWith: aSprite
	^ aSprite class = Explorer
! !

