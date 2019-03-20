Smalltalk createPackage: 'Microengine'!
(Smalltalk packageAt: 'Microengine' ifAbsent: [ self error: 'Package not created: Microengine' ]) imports: {'PIXI' -> 'pixi'. './Microengine-Adapters'. './Microengine-Behaviour'. './Microengine-Locations'. './Microengine-Node'. './Microengine-Observers'. './Microengine-Spatial'. 'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #Libs
	slots: {}
	package: 'Microengine'!

!Libs class methodsFor: 'accessing'!

pixi
	^ PIXI
! !

Object subclass: #MEGameSession
	slots: {}
	package: 'Microengine'!

Object subclass: #Microengine
	slots: {}
	package: 'Microengine'!

!Microengine methodsFor: 'action'!

doAmberWith
	| tag |
	tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.
	tag with: [ :html | html li with: 'Amber Web #with: added me!!' ]
!

doConsoleLog
	| greeting target |
	greeting := 'Hello'.
	target := 'world'.
	console log: #{ #greeting -> greeting. #target -> target. #callback -> [ console log: greeting, ', ', target, '!!' ] }
!

doJQueryAppend
	'#output-list' asJQuery append: '<li>jQuery append added me!!</li>'
!

doSilkTAG
	'#output-list' asSilk LI: 'Silk TAG: added me!!'
! !

!Microengine methodsFor: 'starting'!

augmentPage
	'#amber-with' asJQuery click: [ self doStart ]
!

doStart
! !

!Microengine class methodsFor: 'starting'!

start
	self new augmentPage
! !

