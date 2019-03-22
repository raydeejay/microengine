Smalltalk createPackage: 'Microengine-Keyboard'!
Object subclass: #Key
	slots: {#code}
	package: 'Microengine-Keyboard'!
!Key commentStamp!
I represent a keyboard key. I delegate all my methods to the Keyboard singleton.!

!Key methodsFor: 'accessing'!

code
	^ code
!

code: anObject
	code := anObject
! !

!Key methodsFor: 'binding'!

onPress: aBlock
	Keyboard bind: self code to: aBlock
!

onRelease: aBlock
	Keyboard bindRelease: self code to: aBlock
! !

!Key methodsFor: 'testing'!

isDown
	^ Keyboard pressed: self code
!

isUp
	^ Keyboard notPressed: self code
! !

!Key class methodsFor: 'instance creation'!

code: aNumber onPress: aBlock onRelease: anotherBlock
	"Returns a fully configured Key instance"
	
	^ Keyboard code: aNumber onPress: aBlock onRelease: anotherBlock
! !

Object subclass: #Keyboard
	slots: {#keys. #blocks. #releaseBlocks}
	package: 'Microengine-Keyboard'!
!Keyboard commentStamp!
I represent the keyboard and manage bindings and their handling.!

!Keyboard methodsFor: 'accessing'!

blocks
	^ blocks
!

blocks: anObject
	blocks := anObject
!

keys
	^ keys
!

keys: anObject
	keys := anObject
!

releaseBlocks
	^ releaseBlocks
!

releaseBlocks: anObject
	releaseBlocks := anObject
! !

!Keyboard methodsFor: 'as yet unclassified'!

bind: aKey to: aBlock
	blocks at: aKey put: aBlock
!

bindRelease: aKey to: aBlock
	releaseBlocks at: aKey put: aBlock
!

initialize
	super initialize.
	keys := #{}.
	blocks := #{}.
	releaseBlocks := #{}.
	window addEventListener: 'keydown' func: [ :event | self onPress: event ] capture: false.
	window addEventListener: 'keyup' func: [ :event | self onRelease: event ] capture: false
!

notPressed: aKeyCode
	^ (self pressed: aKeyCode) not
!

onPress: anEvent
	| code |
	
	code := anEvent keyCode.
	self press: code.
	blocks at: code ifPresent: [ :block | block value: anEvent. anEvent preventDefault ] ifAbsent: [].
!

onRelease: anEvent
	| code |
	
	code := anEvent keyCode.
	self release: code.
	releaseBlocks at: code ifPresent: [ :block | block value: anEvent ] ifAbsent: [].
	anEvent preventDefault
!

press: aKeyCode
	keys at: aKeyCode put: true
!

pressed: aKeyCode
	^ keys at: aKeyCode ifAbsent: [ keys at: aKeyCode put: false ]
!

release: aKeyCode
	keys at: aKeyCode put: false
!

unbind: aKey
	blocks removeKey: aKey ifAbsent: []
! !

Keyboard class slots: {#instance}!

!Keyboard class methodsFor: 'factories'!

bind: aKey to: aBlock
	self instance blocks at: aKey put: aBlock
!

bindRelease: aKey to: aBlock
	self instance releaseBlocks at: aKey put: aBlock
!

code: aNumber onPress: aBlock onRelease: anotherBlock
	"Returns a fully configured Key instance"
	
	^ Key new
		code: aNumber;
		onPress: aBlock;
		onRelease: anotherBlock;
		yourself
!

instance
	^ instance ifNil: [ instance := self new ]
!

unbind: aKey
	self instance blocks removeKey: aKey ifAbsent: []
! !

