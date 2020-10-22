//var shuffleSequence = seq("intro", sepWith("sep", sepWith("sep", rshuffle("q1", "q2")));
//var practiceItemTypes = ["practice"];
//shuffleSequence = seq("intro", "expo1");
//shuffleSequence = seq("home","intro","fam", sepWith("sep",shuffle(randomize("expo1"), randomize("expo2")))); //buona ok

shuffleSequence = seq("home","intro","fam", sepWith("sep","practice"), "sexp",sepWith("sep",shuffle(randomize("test"), randomize("filler"))));


//shuffleSequence = seq("test"),("filler");   //

//shuffleSequence = seq(sepWith("sep","practice"), "sexp",sepWith("sep",shuffle(randomize("test"), randomize("filler"))));

var progressBarText = "progression";

var practiceMessage = "session de familiaristion"; //FRENCH - translate this to English
completionMessage = "We have received all your answers. Thank you so much for the time which you dedicated to this project.";
var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence...",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["-3", "-2", "-1", "0", "1", "2", "3"],
        presentAsScale: true,
        instructions: "Click on the box of your choice",
        leftComment: "absolutely unacceptable", rightComment: "perfectly acceptable"
    },
    "Question", {
        hasCorrect: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Formit", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: false
    }
];

var items = [

    // New in Ibex 0.3-beta-9. You can now add a '__SendResults__' controller in your shuffle
    // sequence to send results before the experiment has finished. This is NOT intended to allow
    // for incremental sending of results -- you should send results exactly once per experiment.
    // However, it does permit additional messages to be displayed to participants once the
    // experiment itself is over. If you are manually inserting a '__SendResults__' controller into
    // the shuffle sequence, you must set the 'manualSendResults' configuration variable to 'true', since
    // otherwise, results are automatically sent at the end of the experiment.
    //
    //["sr", "__SendResults__", { }],

    ["sep", "Separator", { }],

    // New in Ibex 0.3-beta19. You can now determine the point in the experiment at which the counter
    // for latin square designs will be updated. (Previously, this was always updated upon completion
    // of the experiment.) To do this, insert the special '__SetCounter__' controller at the desired
    // point in your running order. If given no options, the counter is incremented by one. If given
    // an 'inc' option, the counter is incremented by the specified amount. If given a 'set' option,
    // the counter is set to the given number. (E.g., { set: 100 }, { inc: -1 })
    //
    //["setcounter", "__SetCounter__", { }],

    // NOTE: You could also use the 'Message' controller for the experiment intro (this provides a simple
    // consent checkbox).

    ["home", "Formit", {
        html: { include: "home.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    ["intro", "Formit", {
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    ["fam", "Formit", {
        html: { include: "iniziofam.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    ["sexp", "Formit", {
        html: { include: "inizioexp.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    
    ["practice", "AcceptabilityJudgment", {s: {html: "<!--expo1XyzXpractice1-----------------><br><br>Pourquoi sont partis les enfants &agrave; la gare?"}}],
    ["practice", "AcceptabilityJudgment", {s: {html: "<!--expo1XyzXpractice2-----------------><br><br>Qui ne sais-tu pas si engager?"}}],
    ["practice", "AcceptabilityJudgment", {s: {html: "<!--expo1XyzXpractice3-----------------><br><br>Pourquoi s&rsquo;&eacute;vapore l&rsquo;eau?"}}],
    ["practice", "AcceptabilityJudgment", {s: {html: "<!--expo1XyzXpractice4-----------------><br><br>Qui te demandes-tu &agrave; quel poste engager?"}}],
    
    
[["test", 1], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_1_Qu_Root––><p style=\"text-align: center;\">Quand commence le match ?</p></div>"}}],
[["test", 1], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_1_Qu_Emb––><p style=\"text-align: center;\">Jean se demande quand commence le match.</p></div>"}}],
[["test", 1], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_1_Pq_Root––><p style=\"text-align: center;\">Pourquoi commence le match ?</p></div>"}}],
[["test", 1], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_1_Pq_Emb––><p style=\"text-align: center;\">Jean se demande pourquoi commence le match</p></div>"}}],
[["test", 2], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_2_Qu_Root––><p style=\"text-align: center;\">Quand part le train ?</p></div>"}}],
[["test", 2], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_2_Qu_Emb––><p style=\"text-align: center;\">Paul se demande quand part le train.</p></div>"}}],
[["test", 2], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_2_Pq_Root––><p style=\"text-align: center;\">Pourquoi part le train ?</p></div>"}}],
[["test", 2], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_2_Pq_Emb––><p style=\"text-align: center;\">Paul se demande pourquoi part le train.</p></div>"}}],
[["test", 3], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_3_Qu_Root––><p style=\"text-align: center;\">Quand ont souri les spectateurs ?</p></div>"}}],
[["test", 3], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_3_Qu_Emb––><p style=\"text-align: center;\">Je me demande quand ont souri les spectateurs.</p></div>"}}],
[["test", 3], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_3_Pq_Root––><p style=\"text-align: center;\">Pourquoi ont souri les spectateurs ?</p></div>"}}],
[["test", 3], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_3_Pq_Emb––><p style=\"text-align: center;\">Je me demande pourquoi ont souri les spectateurs.</p></div>"}}],
[["test", 4], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_4_Qu_Root––><p style=\"text-align: center;\">Quand est mort le pape ?</p></div>"}}],
[["test", 4], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_4_Qu_Emb––><p style=\"text-align: center;\">Fran&ccedil;ois se demande quand est mort le pape.</p></div>"}}],
[["test", 4], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_4_Pq_Root––><p style=\"text-align: center;\">Pourquoi est mort le pape ?</p></div>"}}],
[["test", 4], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_4_Pq_Emb––><p style=\"text-align: center;\">Fran&ccedil;ois se demande pourquoi est mort le pape.</p></div>"}}],
[["test", 5], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_5_Qu_Root––><p style=\"text-align: center;\">Quand le facteur est pass&eacute; ?</p></div>"}}],
[["test", 5], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_5_Qu_Emb––><p style=\"text-align: center;\">Marie a vu quand le facteur est pass&eacute;.</p></div>"}}],
[["test", 5], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_5_Pq_Root––><p style=\"text-align: center;\">Pourquoi le facteur est pass&eacute; ?</p></div>"}}],
[["test", 5], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_5_Pq_Emb––><p style=\"text-align: center;\">Marie a vu pourquoi le facteur est pass&eacute;.</p></div>"}}],
[["test", 6], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_6_Qu_Root––><p style=\"text-align: center;\">Quand le chat est sorti ?</p></div>"}}],
[["test", 6], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_6_Qu_Emb––><p style=\"text-align: center;\">Tu sais quand le chat est sorti.</p></div>"}}],
[["test", 6], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_6_Pq_Root––><p style=\"text-align: center;\">Pourquoi le chat est sorti ?</p></div>"}}],
[["test", 6], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_6_Pq_Emb––><p style=\"text-align: center;\">Tu sais pourquoi le chat est sorti.</p></div>"}}],
[["test", 7], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_7_Qu_Root––><p style=\"text-align: center;\">Quand la guerre a commenc&eacute; ?</p></div>"}}],
[["test", 7], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_7_Qu_Emb––><p style=\"text-align: center;\">Bob sait quand la guerre a commenc&eacute;.</p></div>"}}],
[["test", 7], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_7_Pq_Root––><p style=\"text-align: center;\">Pourquoi la guerre a commenc&eacute; ?</p></div>"}}],
[["test", 7], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_7_Pq_Emb––><p style=\"text-align: center;\">Bob sait pourquoi la guerre a commenc&eacute;</p></div>"}}],
[["test", 8], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_8_Qu_Root––><p style=\"text-align: center;\">Quand le portable vibre ?</p></div>"}}],
[["test", 8], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_8_Qu_Emb––><p style=\"text-align: center;\">Je sais quand le portable vibre.</p></div>"}}],
[["test", 8], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_8_Pq_Root––><p style=\"text-align: center;\">Pourquoi le portable vibre ?</p></div>"}}],
[["test", 8], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_8_Pq_Emb––><p style=\"text-align: center;\">Je sais pourquoi le portable vibre.</p></div>"}}],
[["filler", 9], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_9_1––><p style=\"text-align: center;\">filler_1</p></div>"}}],
[["filler", 9], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_9_2––><p style=\"text-align: center;\">filler_1</p></div>"}}],
[["filler", 9], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_9_3––><p style=\"text-align: center;\">filler_1</p></div>"}}],
[["filler", 9], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_9_4––><p style=\"text-align: center;\">filler_1</p></div>"}}],
[["filler", 10], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_10_1––><p style=\"text-align: center;\">filler_2</p></div>"}}],
[["filler", 10], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_10_2––><p style=\"text-align: center;\">filler_2</p></div>"}}],
[["filler", 10], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_10_3––><p style=\"text-align: center;\">filler_2</p></div>"}}],
[["filler", 10], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_10_4––><p style=\"text-align: center;\">filler_2</p></div>"}}],
[["filler", 11], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_11_1––><p style=\"text-align: center;\">filler_3</p></div>"}}],
[["filler", 11], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_11_2––><p style=\"text-align: center;\">filler_3</p></div>"}}],
[["filler", 11], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_11_3––><p style=\"text-align: center;\">filler_3</p></div>"}}],
[["filler", 11], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_11_4––><p style=\"text-align: center;\">filler_3</p></div>"}}],
[["filler", 12], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_12_1––><p style=\"text-align: center;\">filler_4</p></div>"}}],
[["filler", 12], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_12_2––><p style=\"text-align: center;\">filler_4</p></div>"}}],
[["filler", 12], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_12_3––><p style=\"text-align: center;\">filler_4</p></div>"}}],
[["filler", 12], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_12_4––><p style=\"text-align: center;\">filler_4</p></div>"}}],
[["filler", 13], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_13_1––><p style=\"text-align: center;\">filler_5</p></div>"}}],
[["filler", 13], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_13_2––><p style=\"text-align: center;\">filler_5</p></div>"}}],
[["filler", 13], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_13_3––><p style=\"text-align: center;\">filler_5</p></div>"}}],
[["filler", 13], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_13_4––><p style=\"text-align: center;\">filler_5</p></div>"}}],
[["filler", 14], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_14_1––><p style=\"text-align: center;\">filler_6</p></div>"}}],
[["filler", 14], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_14_2––><p style=\"text-align: center;\">filler_6</p></div>"}}],
[["filler", 14], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_14_3––><p style=\"text-align: center;\">filler_6</p></div>"}}],
[["filler", 14], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_14_4––><p style=\"text-align: center;\">filler_6</p></div>"}}],
[["filler", 15], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_15_1––><p style=\"text-align: center;\">filler_7</p></div>"}}],
[["filler", 15], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_15_2––><p style=\"text-align: center;\">filler_7</p></div>"}}],
[["filler", 15], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_15_3––><p style=\"text-align: center;\">filler_7</p></div>"}}],
[["filler", 15], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_15_4––><p style=\"text-align: center;\">filler_7</p></div>"}}],
[["filler", 16], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_16_1––><p style=\"text-align: center;\">filler_8</p></div>"}}],
[["filler", 16], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_16_2––><p style=\"text-align: center;\">filler_8</p></div>"}}],
[["filler", 16], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_16_3––><p style=\"text-align: center;\">filler_8</p></div>"}}],
[["filler", 16], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_16_4––><p style=\"text-align: center;\">filler_8</p></div>"}}],
    
    
    
    
            
       //
    // 10 self-paced-reading filler sentences.
    //


];//var shuffleSequence = seq("intro", sepWith("sep", sepWith("sep", rshuffle("q1", "q2")));
//var practiceItemTypes = ["practice"];
//shuffleSequence = seq("intro", "expo1");
//shuffleSequence = seq("home","intro","fam", sepWith("sep",shuffle(randomize("expo1"), randomize("expo2")))); //buona ok

shuffleSequence = seq("home","intro","fam", sepWith("sep","practice"), "sexp",sepWith("sep",shuffle(randomize("test"), randomize("filler"))));


//shuffleSequence = seq("test"),("filler");   //

//shuffleSequence = seq(sepWith("sep","practice"), "sexp",sepWith("sep",shuffle(randomize("test"), randomize("filler"))));

var progressBarText = "progression";

var practiceMessage = "session de familiaristion";
completionMessage = "We have received all your answers. Thank you so much for the time which you dedicated to this project.";
var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence...",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["-3", "-2", "-1", "0", "1", "2", "3"],
        presentAsScale: true,
        instructions: "Click on the box of your choice",
        leftComment: "absolutely unacceptable", rightComment: "perfectly acceptable"
    },
    "Question", {
        hasCorrect: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Formit", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: false
    }
];

var items = [

    // New in Ibex 0.3-beta-9. You can now add a '__SendResults__' controller in your shuffle
    // sequence to send results before the experiment has finished. This is NOT intended to allow
    // for incremental sending of results -- you should send results exactly once per experiment.
    // However, it does permit additional messages to be displayed to participants once the
    // experiment itself is over. If you are manually inserting a '__SendResults__' controller into
    // the shuffle sequence, you must set the 'manualSendResults' configuration variable to 'true', since
    // otherwise, results are automatically sent at the end of the experiment.
    //
    //["sr", "__SendResults__", { }],

    ["sep", "Separator", { }],

    // New in Ibex 0.3-beta19. You can now determine the point in the experiment at which the counter
    // for latin square designs will be updated. (Previously, this was always updated upon completion
    // of the experiment.) To do this, insert the special '__SetCounter__' controller at the desired
    // point in your running order. If given no options, the counter is incremented by one. If given
    // an 'inc' option, the counter is incremented by the specified amount. If given a 'set' option,
    // the counter is set to the given number. (E.g., { set: 100 }, { inc: -1 })
    //
    //["setcounter", "__SetCounter__", { }],

    // NOTE: You could also use the 'Message' controller for the experiment intro (this provides a simple
    // consent checkbox).

    ["home", "Formit", {
        html: { include: "home.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    ["intro", "Formit", {
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    ["fam", "Formit", {
        html: { include: "iniziofam.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    ["sexp", "Formit", {
        html: { include: "inizioexp.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    
    ["practice", "AcceptabilityJudgment", {s: {html: "<!--expo1XyzXpractice1-----------------><br><br>Pourquoi sont partis les enfants &agrave; la gare?"}}],
    ["practice", "AcceptabilityJudgment", {s: {html: "<!--expo1XyzXpractice2-----------------><br><br>Qui ne sais-tu pas si engager?"}}],
    ["practice", "AcceptabilityJudgment", {s: {html: "<!--expo1XyzXpractice3-----------------><br><br>Pourquoi s&rsquo;&eacute;vapore l&rsquo;eau?"}}],
    ["practice", "AcceptabilityJudgment", {s: {html: "<!--expo1XyzXpractice4-----------------><br><br>Qui te demandes-tu &agrave; quel poste engager?"}}],
    
    
[["test", 1], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_1_Qu_Root––><p style=\"text-align: center;\">Quand commence le match ?</p></div>"}}],
[["test", 1], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_1_Qu_Emb––><p style=\"text-align: center;\">Jean se demande quand commence le match.</p></div>"}}],
[["test", 1], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_1_Pq_Root––><p style=\"text-align: center;\">Pourquoi commence le match ?</p></div>"}}],
[["test", 1], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_1_Pq_Emb––><p style=\"text-align: center;\">Jean se demande pourquoi commence le match</p></div>"}}],
[["test", 2], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_2_Qu_Root––><p style=\"text-align: center;\">Quand part le train ?</p></div>"}}],
[["test", 2], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_2_Qu_Emb––><p style=\"text-align: center;\">Paul se demande quand part le train.</p></div>"}}],
[["test", 2], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_2_Pq_Root––><p style=\"text-align: center;\">Pourquoi part le train ?</p></div>"}}],
[["test", 2], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_2_Pq_Emb––><p style=\"text-align: center;\">Paul se demande pourquoi part le train.</p></div>"}}],
[["test", 3], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_3_Qu_Root––><p style=\"text-align: center;\">Quand ont souri les spectateurs ?</p></div>"}}],
[["test", 3], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_3_Qu_Emb––><p style=\"text-align: center;\">Je me demande quand ont souri les spectateurs.</p></div>"}}],
[["test", 3], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_3_Pq_Root––><p style=\"text-align: center;\">Pourquoi ont souri les spectateurs ?</p></div>"}}],
[["test", 3], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_3_Pq_Emb––><p style=\"text-align: center;\">Je me demande pourquoi ont souri les spectateurs.</p></div>"}}],
[["test", 4], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_4_Qu_Root––><p style=\"text-align: center;\">Quand est mort le pape ?</p></div>"}}],
[["test", 4], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_4_Qu_Emb––><p style=\"text-align: center;\">Fran&ccedil;ois se demande quand est mort le pape.</p></div>"}}],
[["test", 4], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_4_Pq_Root––><p style=\"text-align: center;\">Pourquoi est mort le pape ?</p></div>"}}],
[["test", 4], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_4_Pq_Emb––><p style=\"text-align: center;\">Fran&ccedil;ois se demande pourquoi est mort le pape.</p></div>"}}],
[["test", 5], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_5_Qu_Root––><p style=\"text-align: center;\">Quand le facteur est pass&eacute; ?</p></div>"}}],
[["test", 5], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_5_Qu_Emb––><p style=\"text-align: center;\">Marie a vu quand le facteur est pass&eacute;.</p></div>"}}],
[["test", 5], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_5_Pq_Root––><p style=\"text-align: center;\">Pourquoi le facteur est pass&eacute; ?</p></div>"}}],
[["test", 5], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_5_Pq_Emb––><p style=\"text-align: center;\">Marie a vu pourquoi le facteur est pass&eacute;.</p></div>"}}],
[["test", 6], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_6_Qu_Root––><p style=\"text-align: center;\">Quand le chat est sorti ?</p></div>"}}],
[["test", 6], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_6_Qu_Emb––><p style=\"text-align: center;\">Tu sais quand le chat est sorti.</p></div>"}}],
[["test", 6], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_6_Pq_Root––><p style=\"text-align: center;\">Pourquoi le chat est sorti ?</p></div>"}}],
[["test", 6], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_6_Pq_Emb––><p style=\"text-align: center;\">Tu sais pourquoi le chat est sorti.</p></div>"}}],
[["test", 7], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_7_Qu_Root––><p style=\"text-align: center;\">Quand la guerre a commenc&eacute; ?</p></div>"}}],
[["test", 7], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_7_Qu_Emb––><p style=\"text-align: center;\">Bob sait quand la guerre a commenc&eacute;.</p></div>"}}],
[["test", 7], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_7_Pq_Root––><p style=\"text-align: center;\">Pourquoi la guerre a commenc&eacute; ?</p></div>"}}],
[["test", 7], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_7_Pq_Emb––><p style=\"text-align: center;\">Bob sait pourquoi la guerre a commenc&eacute;</p></div>"}}],
[["test", 8], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_8_Qu_Root––><p style=\"text-align: center;\">Quand le portable vibre ?</p></div>"}}],
[["test", 8], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_8_Qu_Emb––><p style=\"text-align: center;\">Je sais quand le portable vibre.</p></div>"}}],
[["test", 8], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_8_Pq_Root––><p style=\"text-align: center;\">Pourquoi le portable vibre ?</p></div>"}}],
[["test", 8], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– test_8_Pq_Emb––><p style=\"text-align: center;\">Je sais pourquoi le portable vibre.</p></div>"}}],
[["filler", 9], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_9_1––><p style=\"text-align: center;\">filler_1</p></div>"}}],
[["filler", 9], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_9_2––><p style=\"text-align: center;\">filler_1</p></div>"}}],
[["filler", 9], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_9_3––><p style=\"text-align: center;\">filler_1</p></div>"}}],
[["filler", 9], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_9_4––><p style=\"text-align: center;\">filler_1</p></div>"}}],
[["filler", 10], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_10_1––><p style=\"text-align: center;\">filler_2</p></div>"}}],
[["filler", 10], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_10_2––><p style=\"text-align: center;\">filler_2</p></div>"}}],
[["filler", 10], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_10_3––><p style=\"text-align: center;\">filler_2</p></div>"}}],
[["filler", 10], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_10_4––><p style=\"text-align: center;\">filler_2</p></div>"}}],
[["filler", 11], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_11_1––><p style=\"text-align: center;\">filler_3</p></div>"}}],
[["filler", 11], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_11_2––><p style=\"text-align: center;\">filler_3</p></div>"}}],
[["filler", 11], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_11_3––><p style=\"text-align: center;\">filler_3</p></div>"}}],
[["filler", 11], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_11_4––><p style=\"text-align: center;\">filler_3</p></div>"}}],
[["filler", 12], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_12_1––><p style=\"text-align: center;\">filler_4</p></div>"}}],
[["filler", 12], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_12_2––><p style=\"text-align: center;\">filler_4</p></div>"}}],
[["filler", 12], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_12_3––><p style=\"text-align: center;\">filler_4</p></div>"}}],
[["filler", 12], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_12_4––><p style=\"text-align: center;\">filler_4</p></div>"}}],
[["filler", 13], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_13_1––><p style=\"text-align: center;\">filler_5</p></div>"}}],
[["filler", 13], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_13_2––><p style=\"text-align: center;\">filler_5</p></div>"}}],
[["filler", 13], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_13_3––><p style=\"text-align: center;\">filler_5</p></div>"}}],
[["filler", 13], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_13_4––><p style=\"text-align: center;\">filler_5</p></div>"}}],
[["filler", 14], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_14_1––><p style=\"text-align: center;\">filler_6</p></div>"}}],
[["filler", 14], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_14_2––><p style=\"text-align: center;\">filler_6</p></div>"}}],
[["filler", 14], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_14_3––><p style=\"text-align: center;\">filler_6</p></div>"}}],
[["filler", 14], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_14_4––><p style=\"text-align: center;\">filler_6</p></div>"}}],
[["filler", 15], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_15_1––><p style=\"text-align: center;\">filler_7</p></div>"}}],
[["filler", 15], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_15_2––><p style=\"text-align: center;\">filler_7</p></div>"}}],
[["filler", 15], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_15_3––><p style=\"text-align: center;\">filler_7</p></div>"}}],
[["filler", 15], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_15_4––><p style=\"text-align: center;\">filler_7</p></div>"}}],
[["filler", 16], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_16_1––><p style=\"text-align: center;\">filler_8</p></div>"}}],
[["filler", 16], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_16_2––><p style=\"text-align: center;\">filler_8</p></div>"}}],
[["filler", 16], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_16_3––><p style=\"text-align: center;\">filler_8</p></div>"}}],
[["filler", 16], "AcceptabilityJudgment", {s: {html: "<div style=\"width: 50em;\"><!–– filler_16_4––><p style=\"text-align: center;\">filler_8</p></div>"}}],
    
    
    
    
            
       //
    // 10 self-paced-reading filler sentences.
    //


];