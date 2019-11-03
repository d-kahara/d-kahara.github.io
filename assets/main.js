jQuery(document).ready(function ($) { 
    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    new GitHubCalendar("#github-graph", "d-kahara");


    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: "d-kahara", selector: "#ghfeed" })
})