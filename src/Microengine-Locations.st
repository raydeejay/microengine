Smalltalk createPackage: 'Microengine-Locations'!
(Smalltalk packageAt: 'Microengine-Locations' ifAbsent: [ self error: 'Package not created: Microengine-Locations' ]) imports: {'./Microengine-Spatial'}!
MELocation subclass: #MEMap
	slots: {}
	package: 'Microengine-Locations'!

MELocation subclass: #MEPosition
	slots: {}
	package: 'Microengine-Locations'!

