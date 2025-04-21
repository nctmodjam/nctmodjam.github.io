//Coded by Ohas or _ohas on Discord. Writting by falterinarc and TheNorthEast
e = campaignTrail_temp;
e.collect_results = true;

            nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#263e0f";

            nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#4f7a28";

            document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

            $("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

            $(".container")[0].style.backgroundColor = "#cce8b5";

            document.getElementById("header").src = "https://i.imgur.com/exgrb3h.png";

            document.body.background = "https://i.imgur.com/GY4rhFC.jpeg";
            e.election_json = [{"model":"campaign_trail.election","pk":20,"fields":{"year":2016,"summary":"<div style='overflow-y:scroll;height:200px;'>Phil Scott was elected in 2016 on promises of restoring stability to Montpelier, bipartisan cooperation to solve the state's biggest challenges, and compassionate - but fiscally responsible - governance. He has since overseen almost a decade of inertia, and constant conflict with legislative Democrats, who currently have a supermajority. Despite this, or perhaps because of it, he is consistently rated as the most popular Governor in the country, with approval ratings that would make third world dictators blush. After overseeing a unanimously praised COVID response, benefitting from billions in federal dollars secured by the state's tenured congressional delegation on infrastructure and social projects, Governor Scott swatted aside two unserious attempts to dislodge him by absurd margins. The nation's most popular Governor seems poised to secure a fifth term with ease, securing the state's fiscal future on his terms in the midst of a crisis over education finance. At least that is what everyone assumes.<br></div>","image_url":"https://i.imgur.com/BXEvuez.png","winning_electoral_vote_number":270,"advisor_url":"https://i.imgur.com/X55FOuh.png","recommended_reading":"<ul>\n<li><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></li>\n<li><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></li>\n<li><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></li>\n<li><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></li>\n<li><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></li>\n</ul>","has_visits":0,"no_electoral_majority_image":"../static/images/2012-no-majority.jpg"}}];e.temp_election_list = [{"id":20,"year":2016,"is_premium":0,"display_year":"2024 VT"}];e.credits = "Ohas, falterinarc, and TheNorthEast";e.global_parameter_json = [{"model":"campaign_trail.global_parameter","pk":1,"fields":{"vote_variable":1.125,"max_swing":0.12,"start_point":0.94,"candidate_issue_weight":10,"running_mate_issue_weight":3,"issue_stance_1_max":-0.71,"issue_stance_2_max":-0.3,"issue_stance_3_max":-0.125,"issue_stance_4_max":0.125,"issue_stance_5_max":0.3,"issue_stance_6_max":0.71,"global_variance":0.01,"state_variance":0.005,"question_count":25,"default_map_color_hex":"#C9C9C9","no_state_map_color_hex":"#999999"}}];
            e.candidate_json = 
            [{"model":"campaign_trail.candidate","pk":200,"fields":{"first_name":"Phil ","last_name":"Scott","election":20,"party":"Republican","state":"Vermont","priority":1,"description":"<div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><b>NOT PLAYABLE</b> To the Democratic Party, Phillip Brian Scott is the bane of their existence. The man who deceived Vermont and became Governor by selling the idea of a friendly moderate, a problem solver, who then became the most obstructive Governor in the history of the state, ruthlessly advancing the deconstruction of state government at the bidding of scheming libertarian Chief of Staff Jason Gibbs. A man who somehow, despite everything, is for some reason beloved by an overwhelming majority of the state, a majority of Democrats. To conservative Republicans, Phil Scott is the ultimate sellout, the epitome of the RINO (Republican in Name Only), a liberal whose affiliation with the Republican Party is a formality and an accident. To outside observers, Phil Scott is a quaint oddity, a moderate Biden-voting Republican governing the country’s most liberal state, and nothing more. But for the majority of Vermonters, “Governor Nice Guy” has superseded politics, and has become something resembling a constitutional monarch. A symbol of their do-gooder spirit, spendthriftness, warmth, and exceptionalism.<br><br>For Phil Scott, he simply believes he is advancing the fundamental economic interests of the state. No matter what angry radicals on the left and right say, he believes his path is the right one. Growing the economy, making the state more affordable, and protecting the most vulnerable. Phil Scott presses ahead undaunted, although some say his message has become a tired one.<br></div></div></div></div></div>","color_hex":"#ff2600","secondary_color_hex":null,"is_active":1,"image_url":"https://i.imgur.com/46ao8Dx.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":true}},{"model":"campaign_trail.candidate","pk":1002,"fields":{"first_name":"Vermont","last_name":"Republican Party","election":20,"party":"Republican","state":"Vermont","priority":1,"description":"The Vermont Republican Party is nothing more than a joke. It is the place where talented young minds are shunned in favor of dull middle-aged men droning on about how everything was better under Trump, or worse, about how the United Nations is manipulating the weather. The party is lucky if it even runs a candidate for each statewide office in any given election. Phil Scott’s affiliation with this “organization” has become increasingly confined only to the letter R next to his name, and nothing more. But for whatever reason, the Governor refuses to let go of his political home, so when he runs, he runs as the standard bearer of the Vermont Republican Party.<br>","color_hex":"#0000ff","secondary_color_hex":null,"is_active":0,"image_url":"https://i.imgur.com/GwWm2mN.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":"For one hundred years, the Vermont Republican Party governed Vermont without any opposition. Bespectacled and mustachioed Yankee conservatives from the Proctor and Prouty families who governed with aristocratic tact and Puritan temperance. Even after demographic changes and the increasing toxicity of the national Republican brand made Vermont a competitive state in the latter half of the 20th century, the VTGOP remained a potent force. <br><br>None of that is true anymore. The Vermont Republican Party is nothing more than a joke. It is the place where talented young minds are shunned in favor of dull increasingly right-wing middle-aged men.. The party is lucky if it even runs a candidate for each statewide office in any given election. The moderate wing affiliated with Governor Scott has been essentially shunned from the party apparatus. Phil Scott’s affiliation with this “organization” has become increasingly confined only to the letter R next to his name, and nothing more. But for whatever reason, the Governor refuses to let go of his political home, so when he runs, he runs as the standard bearer of the Vermont Republican Party.","candidate_score":1,"running_mate":true,"scrollable":false,"partner":"0"}},
            {"model":"campaign_trail.candidate","pk":201,"fields":{"first_name":"Howard ","last_name":"Dean","election":20,"party":"Democratic","state":"Vermont","priority":1,"description":"<div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'>Governor Howard Brush Dean gets a reputation as liberalism’s wild, fiery, evangelist. He rails against Elon Musk and Benjamin Netanyahu on Twitter, he asks if Donald Trump is on cocaine. In 2004, he declared himself to be on the “democratic wing of the Democratic Party”, tearing into the George W. Bush administration and the Iraq War in a presidential campaign that captured the aspirations of insurgent liberalism that eventually catapulted Barack Obama into the White House. It is perhaps ironic then that as Governor of Vermont for over ten years, he frustrated the left to no end. He sought to slash taxes and reduce spending, he gained a reputation for fiscal hawkishness that endeared him to Republicans. But he also courted controversy when he signed civil union legislation into law and fearlessly pushed for expansion of public healthcare access.<br><br>In any case, that was all supposed to be history. Though he was a remarkably successful DNC Chairman, he did not receive a cabinet post in the Obama White House, and receded into the background of American political life, stepping forward only occasionally to endorse a candidate here and there. But Howard Dean was paying keen attention to the goings on in Vermont. Frustrated by the Scott Administration’s neglect of healthcare reform and intransigence over budget issues, Dean hears the call of action. He also knows something else. If he does not run, Scott’s re-election is a certainty. Though unimaginable to most, Howard Dean knows what he has to do. And that is to take back his old job in 2024.<br><br></div></div></div></div></div></div></div></div></div></div></div></div>","color_hex":"#0000ff","secondary_color_hex":null,"is_active":1,"image_url":"https://i.imgur.com/oG51rVr.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":true}},
            {"model":"campaign_trail.candidate","pk":1004,"fields":{"first_name":"Vermont ","last_name":"Democratic Party","election":20,"party":"Democrat","state":"Vermont","priority":1,"description":"<div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'>Once on the margins of Vermont politics in its halcyon days as a one-party Republican state, the Vermont Democratic Party now dominates the Green Mountain state, electing five Governors and holding state house majorities almost uninterrupted since 1964. Despite the state’s representation as a bastion of the left, the VTDP is led by a clique of center-left technocrats, and is in the unique position among state Democratic parties in facing organized party opposition to its left, the Progressive Party. The Democrats and the Progressives often cooperate and run joint tickets, but in some cases are fierce opponents, especially in Burlington.<br><br>Despite the pre-eminence of the VTDP, they have been repeatedly frustrated in the last 8 years by Governor Phil Scott. Despite all their efforts, he has only become more and more popular, a seemingly insurmountable opponent who can only be waited out and not defeated. But with the entrance of Howard Dean into the race, everything changes, party insiders salivate at the idea of defeating their long-frustrating rival, but others are skeptical, there’s been significant turnover since Dean’s time, many new faces unfamiliar with the Governor. To return to the front of politics, Howard Dean will need to make new friends in the VTDP and appease ardent Progs.<br></div></div></div></div></div></div></div></div></div></div></div></div>","color_hex":"#0000ff","secondary_color_hex":null,"is_active":0,"image_url":"https://i.imgur.com/ii8RqSl.jpeg","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":"<div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'>Whereas once on the margins of Vermont politics in its halcyon days as a one-party Republican state, the Vermont Democratic Party now dominates the Green Mountain state. Vermont was once the most reliable Republican state in the country, voting Republican even in Franklin Roosevelt’s 1936 landslide. No more, now it is the most reliably Democratic state in the country. Despite the state’s representation as a bastion of the left, the VTDP’s position is in fact more complicated than that. The VTDP finds itself in the unique position of being the only state Democratic Party in the country to face organized party opposition from the left, the Progressive Party. At times the Dems and Progs ally, but in other cases, especially in Burlington, they are fierce opponents. <br><br>Despite the dominance of the VTDP, they have been repeatedly frustrated in the last 8 years by Governor Phil Scott. Despite all their efforts, he has only become more and more popular, a seemingly insurmountable opponent who can only be waited out and not defeated. But with the entrance of Howard Dean into the race, everything changes, party insiders salivate at the idea of defeating their long-frustrating rival, but others are skeptical. To win, Dean will need to unite the party, and indeed gain the support of ardent Progressives as well.<br></div></div></div></div></div></div></div></div></div></div></div></div>","candidate_score":1,"running_mate":true,"scrollable":true,"partner":"2"}},
            {"model":"campaign_trail.candidate","pk":1005,"fields":{"first_name":"Vermont ","last_name":"Progressive Party","election":20,"party":"Progressive","state":"Vermont","priority":1,"description":"<div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'>Once on the margins of Vermont politics in its halcyon days as a one-party Republican state, the Vermont Democratic Party now dominates the Green Mountain state, electing five Governors and holding state house majorities almost uninterrupted since 1964. Despite the state’s representation as a bastion of the left, the VTDP is led by a clique of center-left technocrats, and is in the unique position among state Democratic parties in facing organized party opposition to its left, the Progressive Party. The Democrats and the Progressives often cooperate and run joint tickets, but in some cases are fierce opponents, especially in Burlington.<br><br>Despite the pre-eminence of the VTDP, they have been repeatedly frustrated in the last 8 years by Governor Phil Scott. Despite all their efforts, he has only become more and more popular, a seemingly insurmountable opponent who can only be waited out and not defeated. But with the entrance of Howard Dean into the race, everything changes, party insiders salivate at the idea of defeating their long-frustrating rival, but others are skeptical, there’s been significant turnover since Dean’s time, many new faces unfamiliar with the Governor. To return to the front of politics, Howard Dean will need to make new friends in the VTDP and appease ardent Progs.<br></div></div></div></div></div></div></div></div></div></div></div></div>","color_hex":"#0000ff","secondary_color_hex":null,"is_active":0,"image_url":"https://i.imgur.com/r0YgPBU.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":"<div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'>The Vermont Progressive Party has its origins in the “Progressive Coalition”, a loose organization of lefties supporting Mayor Bernie Sanders on the Burlington City Council. In time, inspired by the Canadian social democracy, they formed the Progressive Alliance, which gathered Vermonters of all stripes who felt alienated by the Democratic Party and sought a more economically and socially radical alternative. The Alliance grew to become the Vermont Progressive Party during the 1990s, spurred on by the fiscal conservatism of one Governor Howard Dean. Party chair Anthony Pollina of Middlesex even ran against the good Doctor in 2000. <br><br>The fact that Howard Dean is now publicly aligning himself with this organization that so opposed him is nothing short of a political coronary.  If Dean has chosen to go down this path, it means he has burned all his bridges with the Democratic Party’s insiders and donors. But that wouldn’t even be enough to explain this, the only explanation is pettiness, spite, or worse. It also means the path to become Governor has become much steeper, given the total contempt that many moderate Democrats hold the Progressive Party in.<br></div></div></div></div></div></div></div></div></div></div></div></div>","candidate_score":1,"running_mate":true,"scrollable":true,"partner":"2"}},
            {"model":"campaign_trail.candidate","pk":202,"fields":{"first_name":"Esther","last_name":"Charlestin","election":20,"party":"Democratic","state":"Hell","priority":1,"description":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","color_hex":"#6952eb","secondary_color_hex":null,"is_active":0,"image_url":"../static/images/barack-obama-2012.jpg","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}},{"model":"campaign_trail.candidate","pk":203,"fields":{"first_name":"","last_name":"Write-In/Poa Mutino","election":20,"party":"Example Party","state":"Hell","priority":1,"description":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","color_hex":"#cce8b5","secondary_color_hex":null,"is_active":0,"image_url":"../static/images/barack-obama-2012.jpg","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}}];
            e.running_mate_json = [{"model":"campaign_trail.running_mate","pk":2002,"fields":{"candidate":200,"running_mate":1002}},{"model":"campaign_trail.running_mate","pk":2001,"fields":{"candidate":201,"running_mate":1004}}];
           styling = document.createElement("style");
            document.head.appendChild(styling);          
            styling.innerHTML = `
            body {
                background-size: cover;
            }
            `
        
            quotes = ["““Some folks just naturally love the mountains, and like to live up amoxng them where freedom of thought and action is logical and inherent.” - George Aiken", "“I am often reminded that the wellspring of Vermont liberty flows from Main Street, not State Street.” – Jim Douglas", "“People are so anxious for power that they believe the only way you can succeed is to demonize the other.” - Howard Dean", "“Voting for the person over the party is something that is fairly special in Vermont.” - Phil Scott", "“If you try to fake it in Vermont, you’re not going to get elected very long.” - Patrick Leahy", "“Vermont is a small state which makes an enormous difference.” - Fred Rogers", "“People are yearning for trust and integrity again, they want to trust their government. We have a responsibility.” - Phil Scott"]

            customquote = quotes[Math.floor((Math.random() * quotes.length))]

corrr=`\n<h2>ON THE GREEN MOUNTAIN TRAIL</h2><font id='wittyquote' size='4' color='white'><em>`+customquote+`</em></font>`


function addDynamicCSS() {
    var css = `
        .inner_window_question h3 .mytooltip{
            background-color: lightskyblue;
        }

        .mytooltip {
            position: relative;
            display: inline-block;
            cursor: pointer;
            background-color: lightblue;
        }

        .mytooltip .mytooltiptext {
            width: 150px;
            background-color: lightblue;
            color: black;
            text-align: center;
            border-radius: 6px;
            padding: 10px;
            position: absolute;
            z-index: 99;
            bottom: 20%;
            left: 20%;
            margin-left: -90px;
            opacity: 0;
            transition: opacity 0.3s;
            border: 1px solid black;
            pointer-events: none;
            font-size: 13px !important;
            line-height: 1.5em !important;
            font-weight: normal !important;
            font-style: normal !important;
        }

        .mytooltip .mytooltiptext img {
            max-width: 150px;
            height: auto;
        }

        .mytooltip:hover .mytooltiptext {
            opacity: 1;
            transition-delay: 0.5s;
        }
    `;

    var styleElem = document.createElement('style');
    styleElem.type = 'text/css';
    
    styleElem.appendChild(document.createTextNode(css));
    
    document.head.appendChild(styleElem);
}


addDynamicCSS();

tooltipList = [
    {searchString: "Krowinski", explanationText: "<img src=https://i.imgur.com/GYfkatc.png>Speaker of the Vermont House of Representatives"},
    {searchString: "Baruth", explanationText: "<img src=https://i.imgur.com/ByB289q.png>President pro tempore of the Vermont State Senate"},
	{searchString: "Sanders", explanationText: "<img src=https://i.imgur.com/OoSys1U.png>Senior U.S. Senator for Vermont"},
    {searchString: "Welch", explanationText: "<img src=https://i.imgur.com/01aXaFU.png>“Junior” U.S. Senator for Vermont"},
    {searchString: "Leahy", explanationText: "<img src=https://i.imgur.com/asCmII7.png>St. Patrick"},
    {searchString: "Balint", explanationText: "<img src=https://i.imgur.com/PBN9RAF.png> U.S. Representative for Vermont; a scrappy little dyke"},
    {searchString: "Beck", explanationText: "<img src=https://i.imgur.com/mzfLaAi.png>Republican State Representative from St. Johnsbury, a close ally"},
    {searchString: "Donahue", explanationText: "<img src=https://i.imgur.com/9LC1u1y.pngVeteran> Republican (for the moment) State Representative from Northfield, an American Christian Democrat"},
    {searchString: "Ingalls", explanationText: "<img src=https://i.imgur.com/thMddgt.png> State Senator for Essex County, a conservative Republican"},
    {searchString: "Vyhovsky", explanationText: "<img src=https://i.imgur.com/GRD3krI.png> State Senator for Chittenden County; Progressive and democratic socialist"},
    {searchString: "Trump", explanationText: "The Monster"},
    {searchString: "Klar", explanationText: "<img src=https://i.imgur.com/6tILI6U.png> Your 2020 primary challenger, 2022 Republican State Senate candidate, right-wing to the hilt"},
    {searchString: "Lisman:", explanationText: "The Monster"},
    {searchString: "Malloy", explanationText: "<img src=https://i.imgur.com/KTKzbCy.png> DEPLOY MALLOY"},
    {searchString: "Dandeneau", explanationText: "<img src=https://i.imgur.com/WLVJcKs.png> Director of the Vermont Democratic Party; can’t stand you"},
    {searchString: "Dame", explanationText: "<img src=https://i.imgur.com/ZlXxNVt.png> Chair of the Vermont Republican Party; barely relevant"},
    {searchString: "Douglas", explanationText: "<img src=https://i.imgur.com/vgbCGov.png> Republican Governor of Vermont from 2002-2010, a moderate, but more conservative than you"},
    {searchString: "Benning", explanationText: "Respected Former State Senator and Republican nominee for Lt. Gov in 2022"},
    {searchString: "McCoy", explanationText: "Leader of the State House Republican"},
    {searchString: "Siegel", explanationText: "2022 Democratic Gubernatorial nominee; lost in blowout"},
    {searchString: "Heintz", explanationText: " Editor-in-Chief of the VTDigger, the state’s leading media outlet"},
    {searchString: "Holcombe", explanationText: "Democratic State Representative, your former Secretary of Education turned fierce opponent "},
    {searchString: "Weinberger", explanationText: "<img src=https://i.imgur.com/1wjhmvx.png> Mayor of Burlington since 2012"},
    {searchString: "going to offer her my full support and to introduce her", explanationText: "<img src=https://i.imgur.com/ZYKxx1U.png>"},
    {searchString: "Douglas", explanationText: "<img src=https://i.imgur.com/94IQl7o.png> Vermont State Treasurer; Democrat Governor-in-waiting"},
    {searchString: "Peterson", explanationText: "State Rep (R); Big Dude"},
    {searchString: "Kornheiser", explanationText: "<img src=https://i.imgur.com/LGf7UON.png> Democrat Chair of the House Ways and Means Committee; ambitious and progressive"},
    {searchString: "Ridge", explanationText: "Former anti-government militia training camp in Rutland county"},
    {searchString: "Dem", explanationText: "Irresponsible"},
    {searchString: "Prog", explanationText: "Radical!"},
    {searchString: "Bruins", explanationText: "<img src=https://i.imgur.com/ok6CxAf.png> Go Bs!"},
    {searchString: "Gibbs", explanationText: "<img src=https://i.imgur.com/Ex0Cd8T.png> Governor Gibbs"},
    {searchString: "Mazza", explanationText: "<img src=https://i.imgur.com/A9o1Mh6.png> Best Pals"},
    {searchString: "Haley", explanationText: "<img src=https://i.imgur.com/eMAVDC4.png> Former UN Ambassador and Governor of South Carolina"},
    {searchString: "Romney", explanationText: "<img src=https://i.imgur.com/7YZ7Y2g.png> Junior U.S. Senator for Utah, two-time presidential candidate"},
    {searchString: "Cheney", explanationText: "<img src=https://i.imgur.com/MzMFWPK.png> Former U.S. Representative for Wyoming"},
    {searchString: "Pieciak", explanationText: "<img src=https://i.imgur.com/nU5VRTG.png> Vermont State Treasurer; Democrat Governor-in-waiting"},
    {searchString: "Zuckerman", explanationText: "<img src=https://i.imgur.com/qsWumfx.png> Progressive Lt. Governor of Vermont; does his own thing"},
    {searchString: "Scream", explanationText: "<img src=https://i.imgur.com/hClFlo8.png> YEAAAGHHHH"},
    {searchString: "Cina", explanationText: "<img src=https://i.imgur.com/D7VGlJo.png> Progressive State Rep. for the Old North End of Burlington, known for his outfits and DJing side gig"},
    {searchString: "Dr. Dynasaur", explanationText: "Vermont’s program for low-cost or free health coverage for children and pregnant women, pioneered by Governor Dean"},
    {searchString: "Northeast Kingdom", explanationText: "Vermont’s three most rural northeast counties; Caledonia, Orleans, and Essex"},
    {searchString: "Renne", explanationText: "Deputy Mayor of Winooski, former Balint and Leahy staffer"},
    {searchString: "Gray", explanationText: "Lt. Governor 2021-2023, close to Gov. Dean and Sen. Leahy, candidate for Congress in 2022, lost to Becca Balint badly"},
    {searchString: "Vermont Yankee", explanationText: "Shuttered nuclear power plant in Southeastern Vermont"},
    {searchString: "Saunders", explanationText: "Governor Scott’s attempted appointment to be Secretary of Education, massively unpopular amongst public education advocates"},
    {searchString: "Trippi", explanationText: "Dean for America campaign manager 2004, prominent Democratic political strategist"},
    {searchString: "Siegel", explanationText: "z2022 Democratic Gubernatorial nominee; lost in blowout"},
    {searchString: "Heintz", explanationText: "Editor-in-Chief of the VTDigger, the state’s leading media outlet"},
    {searchString: "Hightower", explanationText: "Former Progressive Burlington City Councillor "},
    {searchString: "W", explanationText: "<img src=https://i.imgur.com/UFleWCY.png> The Great Deceiver"},
    {searchString: "Act 250", explanationText: "Vermont’s controversial (and restrictive) land use act"},
    {searchString: "H. 687", explanationText: " Legislative Democrat’s controversial land use reform act, Republicans accuse it of disadvantaging rural communities"},
    {searchString: "Stanak", explanationText: "Progressive State Rep. and Mayoral candidate. Would be first LGBTQ+ Mayor of Burlington"},
    {searchString: "Healey", explanationText: "Democratic Governor of neighboring Massachusetts; first lesbian Governor in the country"},
    {searchString: "Buttigieg", explanationText: "Husband to Mayor Pete, whom you endorsed for DNC Chair in 2017"},
    {searchString: "Renner", explanationText: "Deputy Mayor of Winooski, former Balint and Leahy staffer"},
    {searchString: "Ed Davey", explanationText: "<img src=https://i.imgur.com/Gp1SFgh.png> jolly ol bloke"},
    {searchString: "Musk", explanationText: "<img src=https://i.imgur.com/7sIidcf.png> What a fucking idiot"},
    {searchString: "Walz", explanationText: "<img src=https://i.imgur.com/ueOvjJ7.png>"},
    {searchString: "Tilray", explanationText: "American pharmaceutical, cannabis-lifestyle and consumer packaged goods company, Howard Dean is a board member"},
    {searchString: "Hochul", explanationText: "<img src=https://i.imgur.com/yIOdA9F.png> 57th Governor of New York, lost the House"},
    {searchString: "Shannon", explanationText: "<img src=https://i.imgur.com/Z8nA8Hw.png> All Hands On Deck!"},
  
  ]; 
// Initialise custom music

$("#music_player")[0].children[0].style.display="none"
$("#music_player")[0].children[1].style.display="none"

document.getElementById("modLoadReveal").style.display="none"
document.getElementById("modloaddiv").style.display="none"

musicBox = document.getElementById("music_player")
musicBox.style.display=""

var trackSel;
e = campaignTrail_temp
e.selectedSoundtrack = 0

toTime = (seconds) => {
  var date = new Date(null);
  date.setSeconds(seconds);
  return date.toISOString().substr(11, 8);
}

generateTime = () => {
    // Get the audio element
    var audio = document.getElementById("campaigntrailmusic");

    timeTracker = document.createElement("div");
    timeTracker.style = `
      text-align:left;
      border-style:solid;
      border-width:3px;
      height:150px;
      width:200px;
      background-color:#999999;
      float:right;
      padding: 10px;
    `
    $("#trackSelParent")[0].prepend(timeTracker);
    $("#trackSelParent")[0].prepend(document.createElement("br"));

    // Create a new element to display the current position of the audio
    var positionDisplay = document.createElement("gg");
    positionDisplay.id = "position-display";

    // Create a new slider element to change the time
    var timeSlider = document.createElement("input");
    timeSlider.type = "range";
    timeSlider.min = 0;
    timeSlider.max = 1;
    timeSlider.step = 0.001;
    timeSlider.value = 0;
    timeSlider.style.width = "200px";
    timeSlider.id = "time-slider";

    var pausePlay = document.createElement("button");
    pausePlay.id = "position-display";
    pausePlay.innerHTML = "<b>Pause</b>"
    pausePlay.style.width = "100%";


    pausePlay.addEventListener("click", event => {
      event.preventDefault();
      updatePositionDisplay();
      let audio = document.getElementById("campaigntrailmusic");
      if (audio.paused) {
        audio.play();
        event.target.innerHTML = "<b>Pause</b>";
        return;
      }
      audio.pause();
      event.target.innerHTML = "<b>Play</b>";
      return;
    })

    var volumeLabel = document.createElement("gg");
    volumeLabel.id = "volume-label";
    volumeLabel.innerHTML = "<br><b>Volume: </b>"

    var volumeSlider = document.createElement("input");
    volumeSlider.type = "range";
    volumeSlider.min = 0;
    volumeSlider.max = 1;
    volumeSlider.step = 0.001;
    volumeSlider.value = 0;
    volumeSlider.style.width = "200px";
    volumeSlider.id = "volume-slider";

    volumeSlider.value = audio.volume;

    timeTracker.appendChild(pausePlay);
    timeTracker.appendChild(document.createElement("br"));
    timeTracker.appendChild(document.createElement("br"));
    timeTracker.appendChild(positionDisplay);
    timeTracker.appendChild(timeSlider);
    timeTracker.appendChild(volumeLabel);
    timeTracker.appendChild(volumeSlider);

    updatePositionDisplay();

    //for (let i = 0; i < 10; i++)
    //timeTracker.append(document.createElement("br"));


    // Function to update the position display
    function updatePositionDisplay() {
      positionDisplay.innerHTML = "<b>Time:</b> " + toTime(audio.currentTime) + "<br>";
      timeSlider.value = audio.duration ? audio.currentTime / audio.duration : 0;
    }

    // Function to change the time of the audio
    function changeTime() {
      positionDisplay.innerHTML = "<b>Time:</b> " + toTime(audio.currentTime) + "<br>";
      audio.currentTime = timeSlider.value * audio.duration;
    }

    updateVolume = event => {
      audio.volume = event.target.value;
    }
    
    // Update the position display and slider every second
    setInterval(updatePositionDisplay, 1000);

    // Listen for changes to the time slider and change the time of the audio
    timeSlider.addEventListener("input", changeTime);
    volumeSlider.addEventListener("input", updateVolume)
}

function newMusicPlayer() {
  trackSel = document.createElement("div");
  trackSel.id = "trackSelParent"
  let z = `<br><br><br><br><br><br><br><br><br><br><div id='trackSel' style="text-align:left;border-style:solid;border-width:3px;overflow-y: scroll;overflow-x: hidden;height:200px; width:400px;background-color:#999999;float:right;">`
  z += `<b><select id='selectSoundtrack'><option value='`+soundtracks[e.selectedSoundtrack].name+`'>`+soundtracks[e.selectedSoundtrack].name+"</option>"
  for (i in soundtracks) {
    if (soundtracks[e.selectedSoundtrack] != soundtracks[i]) {
      z += `<option value='`+soundtracks[i].name+`'>`+soundtracks[i].name+`</option>`
    }
  }
  z += `</select></b><br><br>`
  // <label><input type="radio" name="option" value="option1">Option 1</label><br>
  for (i in soundtracks[e.selectedSoundtrack].tracklist) {
    let a = soundtracks[e.selectedSoundtrack].tracklist[i]
    let b = `<label><input class="trackSelector" type="radio" name="trackSelector" value="`+i+`">`+a.name+`</label><br>`
    z += b
  }
  z += "</div><br><br>"
  trackSel.innerHTML = z

  // select correct song

  musicBox.appendChild(trackSel);
  Array.from(document.getElementById("trackSel").children).filter(f=>{
    return f.tagName == "LABEL"
  }).map(f=>f.children[0])[0].checked = true

  // set soundtrack changer

  soundtrackSelector = document.getElementById("selectSoundtrack")
  soundtrackSelector.onchange = function() {
    for (i in soundtracks) {
      if (soundtracks[i].name == soundtrackSelector.value) {
        e.selectedSoundtrack = i
        break
      }
    }
    document.getElementById("trackSelParent").remove()
    newMusicPlayer()
  }

  var matches = document.querySelectorAll('.trackSelector');

  for (match in matches) {
    matches[match].onchange = function() {
      audio = $("#campaigntrailmusic")[0];
      audio.src = soundtracks[e.selectedSoundtrack].tracklist[this.value].url
      audio.currentTime = 0
    }
  }

  musicBox.children[2].loop = false
  musicBox.children[2].src = soundtracks[e.selectedSoundtrack].tracklist[0].url

  musicBox.children[2].onended = function() {
    console.log("next track")
    let selected = Number(document.querySelector('input[name="trackSelector"]:checked').value);
    let newSel = clamp(selected+1, soundtracks[e.selectedSoundtrack].tracklist.length-1, 0)
    let buttons = Array.from(document.getElementById("trackSel").children).filter(f=>{
      return f.tagName == "LABEL"
    }).map(f=>f.children[0])
    //let selectedIndex = buttons.map(f=>f.children[0]).map(f=>f.checked)
    buttons[newSel].click()
  }

  for (w = 0; w < 7; w++) {
    document.getElementById("trackSelParent").appendChild(document.createElement("br"))
  }
  
  generateTime();
}

clamp = function(a, max, min, overflow=true) {
  if (overflow) {
    return a > max ? min : a < min ? max : a;
  }
  return a > max ? max : a < min ? min : a;
}


// Track list

var soundtracks = {
  0: {
    name: "Vermont",
    tracklist: [
      {
        "name": "The Divided Sky - Phish",
        "url": "https://audio.jukehost.co.uk/rfe4G8dLKLMIkEOA7YtxmjnjcEEzwXgp"
      },
      {
        "name": "Vermont - These Green Mountains",
        "url": "https://audio.jukehost.co.uk/pkxTtLz4unBykxGyGJC5ytUcT9SFobKC"
      },
      {
        "name": "Hail! Vermont - Rick Pickren",
        "url": "https://audio.jukehost.co.uk/XWdphfTiFJzfoFPmXinT3KPWcEEb5g1u"
      },
      {
        "name": "Ballad of the Green Mountaineer - Jim Knable",
        "url": "https://audio.jukehost.co.uk/yQ5IgLOiOQZoHHOEV6howjH5PKX6qfUU"
      },
      {
        "name": "Stick Season - Noah Kahan",
        "url": "https://audio.jukehost.co.uk/X6GEoAcnwHBtbPsRBEMw2rzBGxz3yYEl"
      },

   ]
   },
   1: {
    name: "Scott",
    tracklist: [
      {
        "name": "The Ballad Of Thunder Road",
        "url": "https://audio.jukehost.co.uk/M1kxCOmO2tk2QJryLo7ZtFWWYAVLxuq1"
      },
      {
        "name": "My Way (2008 Remastered)",
        "url": "https://audio.jukehost.co.uk/H1W8RTABK3nbTtNiM6m8xtCF30GIEjKE"
      },
      {
        "name": "Tom Petty- I Won't Back Down",
        "url": "https://audio.jukehost.co.uk/ORwMHT58OhGeqxGQEEpIKL3cEounWUiv"
      },
      {
        "name": "Reelin' In The Years",
        "url": "https://audio.jukehost.co.uk/8sAOgl3V3ymHztloSqcagSnowWVvHEUn"
      },
      {
        "name": "Governor Phil Scott, We Are Never Ever Ever Getting Back Together Low Lily",
        "url": "https://audio.jukehost.co.uk/iqe2zJqAItOZ7BpxAoEo745piO0GbaEE"
      },
   ]
   },
   2: {
    name: "Dean",
    tracklist: [
      {
        "name": "All Along the Watchtower - Bob Dylan",
        "url": "https://audio.jukehost.co.uk/EGyGLRIvhz5IR9Hgd2f9yBMEZs4ARw30"
      },
      {
        "name": "Culture War - Arcade Fire",
        "url": "https://audio.jukehost.co.uk/RhtuRlzsvBxm4eLoUPiAysQT1FfnIdM3"
      },
      {
        "name": "Mr. November - The National",
        "url": "https://audio.jukehost.co.uk/NvZjEsU0zzF38iKXJEC2nLlyh4eLXMQ7"
      },
      {
        "name": "Dirty Harry - Gorillaz",
        "url": "https://audio.jukehost.co.uk/g309kEETfxUYJHuKvmLGgkK2Wq31U4MD"
      },
      {
        "name": "Howard Dean Yell Remix - Unknown",
        "url": "https://audio.jukehost.co.uk/9P6eqKrSp2KhP7PKoYaANFhTMPMH6aqv"
      },
   ]
   },
   	  
}

// Set up new music player

newMusicPlayer()
HistHexcolour=["#FF0000","#0000FF","#cce8b5","#6952eb",];
HistName=["Phil Scott","Howard Dean","Write In","Poa Mutino",];
HistEV=[10,4,0,0,];
HistPV=["169,211","141,224","7,721","3,539"];
HistPVP=["52.6%","43.9%","2.4%","1.1%",];















    
