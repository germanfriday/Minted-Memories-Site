flippingBook.pages = [
	"pages/page-001.jpg",
	"pages/page-002.jpg",
	"pages/page-003.jpg",
	"pages/page-004.jpg",
	"pages/page-005.jpg",
	"pages/page-006.jpg",
	"pages/page-007.jpg",
	"pages/page-008.jpg",
	"pages/page-009.jpg",
	"pages/page-010.jpg",
	"pages/page-011.jpg",
	"pages/page-012.jpg",
	"pages/page-013.jpg",
	"pages/page-014.jpg",
	"pages/page-015.jpg",
	"pages/page-016.jpg"
];


flippingBook.contents = [
	[ "Front Cover", 1 ],
	[ "Opening Spread", 2 ],
	[ "Second Spread", 4 ],
	[ "Third Spread", 6 ],
	[ "Fourth Spread", 8 ],
	[ "Fifth Spread", 10 ],
	[ "Sixth Spread", 12 ],
	[ "Closing Spread", 14 ],
	[ "Back Cover", 16 ],
];

// define custom book settings here
flippingBook.settings.bookWidth = 950;
flippingBook.settings.bookHeight = 615;
flippingBook.settings.pageBackgroundColor = 0xffffff;
flippingBook.settings.backgroundColor = 0xcccccc;
flippingBook.settings.zoomUIColor = 0xcccccc;
flippingBook.settings.useCustomCursors = false;
flippingBook.settings.dropShadowEnabled = true;
flippingBook.settings.zoomImageWidth = 1275;
flippingBook.settings.zoomImageHeight = 1651;
flippingBook.settings.downloadURL = "pdf/sample-book.pdf";
flippingBook.settings.flipSound = "sounds/02.mp3";
flippingBook.settings.flipCornerStyle = "first page only";
flippingBook.settings.zoomHintEnabled = true;

// default settings can be found in the flippingbook.js file
flippingBook.create();