google.load("feeds", "1");

function OnLoad() {
// Create a feed control
var feedControl = new google.feeds.FeedControl();

// Add two feeds.
feedControl.addFeed("http://nonoisenews.com/buriedleads.rss", "");
// feedControl.addFeed("https://feeds.pinboard.in/rss/secret:c4266ce4667c9eca82af/u:warisbusiness/t:wib", "Latest Headlines");

// Draw it.
feedControl.draw(document.getElementById("google_feeds"));
}

google.setOnLoadCallback(OnLoad);
