Smalltalk createPackage: 'Microengine'!
(Smalltalk packageAt: 'Microengine' ifAbsent: [ self error: 'Package not created: Microengine' ]) imports: {'PIXI' -> 'pixi'. './Microengine-Keyboard'. 'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #Libs
	slots: {}
	package: 'Microengine'!

!Libs class methodsFor: 'accessing'!

pixi
	^ PIXI
! !

Object subclass: #MEAnnouncement
	slots: {}
	package: 'Microengine'!

!MEAnnouncement class methodsFor: 'accessing'!

classTag
	"Returns a tag or general category for this class.
	Typically used to help tools do some reflection.
	Helios, for example, uses this to decide what icon the class should display."
	
	^ 'announcement'
! !

MEAnnouncement subclass: #MoveAnnouncement
	slots: {}
	package: 'Microengine'!

MoveAnnouncement subclass: #AnnounceDown
	slots: {}
	package: 'Microengine'!

MoveAnnouncement subclass: #AnnounceLeft
	slots: {}
	package: 'Microengine'!

MoveAnnouncement subclass: #AnnounceRight
	slots: {}
	package: 'Microengine'!

MoveAnnouncement subclass: #AnnounceStop
	slots: {}
	package: 'Microengine'!

MoveAnnouncement subclass: #AnnounceUp
	slots: {}
	package: 'Microengine'!

Announcer subclass: #MEAnnouncer
	slots: {}
	package: 'Microengine'!
!MEAnnouncer commentStamp!
My unique instance is the global announcer handling all Amber system-related announces.

## API

Access to the unique instance is done via `#current`!

MEAnnouncer class slots: {#current}!

!MEAnnouncer class methodsFor: 'accessing'!

current
	^ current ifNil: [ current := super new ]
! !

!MEAnnouncer class methodsFor: 'instance creation'!

new
	self shouldNotImplement
! !

Object subclass: #MEGameSession
	slots: {#nodes. #app. #explorer. #treasure}
	package: 'Microengine'!

!MEGameSession methodsFor: 'accessing'!

app
	^ app
!

app: anObject
	app := anObject
!

nodes
	^ nodes
!

nodes: anObject
	nodes := anObject
! !

!MEGameSession methodsFor: 'action'!

checkCollisions
	"check if the explorer collides with the treasure"
	(explorer collidesWith: treasure)
		ifTrue: [ MEAnnouncer current announce: AnnounceStop new ]
!

gameLoop: aDelta
	"do something :-D"
	nodes do: [ :each | each update ].
	self checkCollisions
!

start
	app ticker add: [ :delta | self gameLoop: delta ]
!

stop
	app ticker stop
! !

!MEGameSession methodsFor: 'initialization'!

initialize
	nodes := #().	
	self addTreasure addExplorer.
	MEAnnouncer current
		on: AnnounceLeft do: [ explorer moveLeft ];
		on: AnnounceRight do: [ explorer moveRight ];
		on: AnnounceUp do: [ explorer moveUp ];
		on: AnnounceDown do: [ explorer moveDown ];
		on: AnnounceStop do: [ explorer stop ].
	Key
		code: 37 onPress: [ MEAnnouncer current announce: AnnounceLeft new ] onRelease: [ ];
		code: 39 onPress: [ MEAnnouncer current announce: AnnounceRight new ] onRelease: [ ];
		code: 38 onPress: [ MEAnnouncer current announce: AnnounceUp new ] onRelease: [ ];
		code: 40 onPress: [ MEAnnouncer current announce: AnnounceDown new ] onRelease: [ ]
! !

!MEGameSession methodsFor: 'sprites'!

addExplorer
	| spr |
	
	spr := (Libs pixi Sprite newValue: (app assets at: 'explorer') texture).
	app app stage addChild: spr.
	explorer := Explorer on: spr.
	nodes add: explorer
!

addTreasure
	| spr |
	
	spr := (Libs pixi Sprite newValue: (app assets at: 'treasure') texture).
	app app stage addChild: spr.
	treasure := Treasure on: spr.
	nodes add: treasure
! !

!MEGameSession class methodsFor: 'instance creation'!

on: anApplication
	^ self basicNew
		app: anApplication;
		initialize;
		yourself
! !

Object subclass: #Microengine
	slots: {#app. #resources. #loader. #assets. #session. #ticker}
	package: 'Microengine'!

!Microengine methodsFor: 'accessing'!

app
	^ app
!

app: anObject
	app := anObject
!

assets
	^ assets
!

assets: anObject
	assets := anObject
!

loader
	^ loader
!

loader: anObject
	loader := anObject
!

session
	^ session
!

session: anObject
	session := anObject
!

ticker
	^ ticker
! !

!Microengine methodsFor: 'action'!

doJQueryAppend
	'#output-list' asJQuery append: '<li>jQuery append added me!!</li>'
!

doStart
	"| spr |

	spr := Libs pixi Sprite newValue: (assets at: 'treasure') texture.
	app stage addChild: spr."
	session start
! !

!Microengine methodsFor: 'resources'!

postload
	assets := loader resources.
	session := MEGameSession on: self.
	console log: session
!

preload
	self resources keysAndValuesDo: [ :k :v | loader add: k file: v ]
!

resources
	^ #{
		#treasure -> 'images/treasure.png'.
		#explorer -> 'images/explorer.png'
	}
!

setup
	app := Libs pixi Application new.
	document body appendChild: app view.

	loader := app loader.
	ticker := app ticker.
	self preload.
	loader load: [ self postload ]
! !

!Microengine methodsFor: 'starting'!

augmentPage
	"Silk new DIV: {#id -> 'canvas'. #width -> 512. #height -> 384}."
	'#amber-with' asJQuery click: [ self doStart ].
	self setup
! !

Microengine class slots: {#instance}!

!Microengine class methodsFor: 'starting'!

instance
	^ instance
!

start
	instance := self new.
	instance augmentPage
! !

Object subclass: #Registry
	slots: {#dictionary}
	package: 'Microengine'!

!Registry methodsFor: 'accessing'!

at: aKey
	^ self dictionary at: aKey
!

at: aKey put: aValue
	^ self dictionary at: aKey put: aValue
!

dictionary
	^ dictionary ifNil: [ dictionary := Dictionary new ]
! !

Object subclass: #Sprite
	slots: {#sprite. #dx. #dy}
	package: 'Microengine'!

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
! !

!Sprite methodsFor: 'colliding'!

collidesWith: aSprite
	^ self sprite x <= (aSprite sprite x + aSprite sprite width)
		and: [ aSprite sprite x <= (self sprite x + self sprite width)
			and: [ self sprite y <= (aSprite sprite y + aSprite sprite height)
				and: [ aSprite sprite y <= (self sprite y + self sprite height) ] ] ]
! !

!Sprite methodsFor: 'updating'!

update
	"implement if necessary"
! !

!Sprite class methodsFor: 'instance creation'!

on: aSprite
	^ self basicNew
		sprite: aSprite;
		initialize;
		yourself
! !

Sprite subclass: #Explorer
	slots: {}
	package: 'Microengine'!

!Explorer methodsFor: 'action'!

moveDown
	self dy: 5
!

moveLeft
	self dx: -5
!

moveRight
	self dx: 5
!

moveUp
	self dy: -5
!

stop
	self dx: 0; dy: 0
! !

!Explorer methodsFor: 'initialization'!

initialize
	super initialize.
	dx := 0.
	dy := 0
! !

!Explorer methodsFor: 'updating'!

update
	sprite x: sprite x + dx.
	dx := dx * 0.9.
	sprite y: sprite y + dy.
	dy := dy * 0.9
! !

Sprite subclass: #Treasure
	slots: {}
	package: 'Microengine'!

!Treasure methodsFor: 'initialization'!

initialize
	super initialize.
	self sprite x: 100
! !

!Treasure methodsFor: 'updating'!

update
	"self sprite x: self sprite x + 1"
! !

