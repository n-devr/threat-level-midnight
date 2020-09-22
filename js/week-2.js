const rosterToOwnerMap = JSON.parse('[{ "owner_id": "380823780869570560", "roster_id": 1 }, { "owner_id": "380828081797099520", "roster_id": 2 }, { "owner_id": "380837347656445952", "roster_id": 3 }, { "owner_id": "308295339503284224", "roster_id": 4 }, { "owner_id": "460510043725361152", "roster_id": 5 }, { "owner_id": "532971434637471744", "roster_id": 6 }, { "owner_id": "459787778549346304", "roster_id": 7 }, { "owner_id": "459787785499308032", "roster_id": 8 }, { "owner_id": "459791062030872576", "roster_id": 9 }, { "owner_id": "460239525851951104", "roster_id": 10 }, { "owner_id": "331552346066673664", "roster_id": 11 }, { "owner_id": "380837368925597696", "roster_id": 12 }]');
const players = [
    {
        "user_id": "308295339503284224",
        "settings": null,
        "metadata": {
            "team_name": "Team Barton",
            "mention_pn": "on",
            "mascot_message_emotion_leg_1": "idle",
            "mascot_item_type_id_leg_9": "ref",
            "mascot_item_type_id_leg_8": "ref",
            "mascot_item_type_id_leg_7": "ref",
            "mascot_item_type_id_leg_6": "ref",
            "mascot_item_type_id_leg_5": "ref",
            "mascot_item_type_id_leg_4": "ref",
            "mascot_item_type_id_leg_3": "ref",
            "mascot_item_type_id_leg_2": "ref",
            "mascot_item_type_id_leg_17": "ref",
            "mascot_item_type_id_leg_16": "ref",
            "mascot_item_type_id_leg_15": "ref",
            "mascot_item_type_id_leg_14": "ref",
            "mascot_item_type_id_leg_13": "ref",
            "mascot_item_type_id_leg_12": "ref",
            "mascot_item_type_id_leg_11": "ref",
            "mascot_item_type_id_leg_10": "ref",
            "mascot_item_type_id_leg_1": "ref",
            "allow_pn": "on"
        },
        "league_id": "533133678566834176",
        "is_owner": false,
        "is_bot": false,
        "display_name": "Maxisamadman",
        "avatar": "5c1dc1e788652ca784937f790c2c3e6d"
    },
    {
        "user_id": "331552346066673664",
        "settings": null,
        "metadata": {
            "team_name": "YAC Sparrows",
            "mention_pn": "on",
            "mascot_message_emotion_leg_1": "action_joy02",
            "mascot_item_type_id_leg_9": "larry-bird",
            "mascot_item_type_id_leg_8": "larry-bird",
            "mascot_item_type_id_leg_7": "larry-bird",
            "mascot_item_type_id_leg_6": "larry-bird",
            "mascot_item_type_id_leg_5": "larry-bird",
            "mascot_item_type_id_leg_4": "larry-bird",
            "mascot_item_type_id_leg_3": "larry-bird",
            "mascot_item_type_id_leg_2": "larry-bird",
            "mascot_item_type_id_leg_17": "larry-bird",
            "mascot_item_type_id_leg_16": "larry-bird",
            "mascot_item_type_id_leg_15": "larry-bird",
            "mascot_item_type_id_leg_14": "larry-bird",
            "mascot_item_type_id_leg_13": "larry-bird",
            "mascot_item_type_id_leg_12": "larry-bird",
            "mascot_item_type_id_leg_11": "larry-bird",
            "mascot_item_type_id_leg_10": "larry-bird",
            "mascot_item_type_id_leg_1": "larry-bird",
            "avatar": "https://sleepercdn.com/uploads/dc964512db4d47df3ba306a5396bdfdd.jpg",
            "archived": "off",
            "allow_pn": "on"
        },
        "league_id": "533133678566834176",
        "is_owner": false,
        "is_bot": false,
        "display_name": "seannycash",
        "avatar": "c51c19b042da1ae4d61402469e0c0a24"
    },
    {
        "user_id": "380823780869570560",
        "settings": null,
        "metadata": {
            "team_name": "Audubon Anxiety",
            "mention_pn": "on",
            "mascot_message_emotion_leg_1": "action_joy02",
            "mascot_item_type_id_leg_9": "gman",
            "mascot_item_type_id_leg_8": "gman",
            "mascot_item_type_id_leg_7": "gman",
            "mascot_item_type_id_leg_6": "gman",
            "mascot_item_type_id_leg_5": "gman",
            "mascot_item_type_id_leg_4": "gman",
            "mascot_item_type_id_leg_3": "gman",
            "mascot_item_type_id_leg_2": "gman",
            "mascot_item_type_id_leg_17": "gman",
            "mascot_item_type_id_leg_16": "gman",
            "mascot_item_type_id_leg_15": "gman",
            "mascot_item_type_id_leg_14": "gman",
            "mascot_item_type_id_leg_13": "gman",
            "mascot_item_type_id_leg_12": "gman",
            "mascot_item_type_id_leg_11": "gman",
            "mascot_item_type_id_leg_10": "gman",
            "mascot_item_type_id_leg_1": "taco",
            "allow_pn": "on"
        },
        "league_id": "533133678566834176",
        "is_owner": true,
        "is_bot": false,
        "display_name": "nweinert",
        "avatar": "a7edf17a1956ebe79017732156625301"
    },
    {
        "user_id": "380828081797099520",
        "settings": null,
        "metadata": {
            "team_name": "Not a Mahouse; a Mahome",
            "mention_pn": "on",
            "mascot_message_emotion_leg_1": "idle_nervous",
            "mascot_item_type_id_leg_9": "dawg-pound",
            "mascot_item_type_id_leg_8": "dawg-pound",
            "mascot_item_type_id_leg_7": "dawg-pound",
            "mascot_item_type_id_leg_6": "dawg-pound",
            "mascot_item_type_id_leg_5": "dawg-pound",
            "mascot_item_type_id_leg_4": "dawg-pound",
            "mascot_item_type_id_leg_3": "dawg-pound",
            "mascot_item_type_id_leg_2": "dawg-pound",
            "mascot_item_type_id_leg_17": "dawg-pound",
            "mascot_item_type_id_leg_16": "dawg-pound",
            "mascot_item_type_id_leg_15": "dawg-pound",
            "mascot_item_type_id_leg_14": "dawg-pound",
            "mascot_item_type_id_leg_13": "dawg-pound",
            "mascot_item_type_id_leg_12": "dawg-pound",
            "mascot_item_type_id_leg_11": "dawg-pound",
            "mascot_item_type_id_leg_10": "dawg-pound",
            "mascot_item_type_id_leg_1": "dawg-pound",
            "avatar": "https://sleepercdn.com/uploads/682c9058920f98a74140f774fc428e9f.jpg",
            "allow_pn": "on"
        },
        "league_id": "533133678566834176",
        "is_owner": false,
        "is_bot": false,
        "display_name": "jwhaless",
        "avatar": "6a94495efe41e7571a6416abb81a4990"
    },
    {
        "user_id": "380837347656445952",
        "settings": null,
        "metadata": {
            "mascot_item_type_id_leg_6": "cookie-party",
            "mascot_item_type_id_leg_10": "cookie-party",
            "team_name_update": "off",
            "mention_pn": "on",
            "mascot_item_type_id_leg_5": "cookie-party",
            "mascot_item_type_id_leg_13": "cookie-party",
            "team_name": "Kenyan Cornelihurst",
            "allow_pn": "on",
            "mascot_item_type_id_leg_9": "cookie-party",
            "mascot_item_type_id_leg_8": "cookie-party",
            "mascot_item_type_id_leg_7": "cookie-party",
            "mascot_item_type_id_leg_17": "cookie-party",
            "mascot_item_type_id_leg_12": "cookie-party",
            "mascot_item_type_id_leg_15": "cookie-party",
            "trade_block_pn": "on",
            "join_voice_pn": "on",
            "user_message_pn": "on",
            "transaction_commissioner": "off",
            "transaction_free_agent": "on",
            "mascot_item_type_id_leg_4": "cookie-party",
            "mascot_message_emotion_leg_2": "action_hurt02",
            "transaction_trade": "on",
            "transaction_waiver": "on",
            "mascot_message_emotion_leg_1": "idle_happy",
            "mascot_item_type_id_leg_16": "cookie-party",
            "mascot_item_type_id_leg_11": "cookie-party",
            "mascot_item_type_id_leg_1": "cookie-party",
            "player_like_pn": "on",
            "mascot_item_type_id_leg_3": "cookie-party",
            "mascot_message": "off",
            "mascot_item_type_id_leg_14": "cookie-party",
            "player_nickname_update": "off",
            "mascot_item_type_id_leg_2": "cookie-party"
        },
        "league_id": "533133678566834176",
        "is_owner": false,
        "is_bot": false,
        "display_name": "GeoffJablonski9",
        "avatar": "f41d43cf537550234ae97e0497103e2a"
    },
    {
        "user_id": "380837368925597696",
        "settings": null,
        "metadata": {
            "team_name": "And that is Dallas ",
            "mention_pn": "on",
            "mascot_message_emotion_leg_1": "idle_happy",
            "mascot_item_type_id_leg_9": "pizza",
            "mascot_item_type_id_leg_8": "pizza",
            "mascot_item_type_id_leg_7": "pizza",
            "mascot_item_type_id_leg_6": "pizza",
            "mascot_item_type_id_leg_5": "pizza",
            "mascot_item_type_id_leg_4": "pizza",
            "mascot_item_type_id_leg_3": "pizza",
            "mascot_item_type_id_leg_2": "pizza",
            "mascot_item_type_id_leg_17": "pizza",
            "mascot_item_type_id_leg_16": "pizza",
            "mascot_item_type_id_leg_15": "pizza",
            "mascot_item_type_id_leg_14": "pizza",
            "mascot_item_type_id_leg_13": "pizza",
            "mascot_item_type_id_leg_12": "pizza",
            "mascot_item_type_id_leg_11": "pizza",
            "mascot_item_type_id_leg_10": "pizza",
            "mascot_item_type_id_leg_1": "pizza",
            "allow_pn": "on"
        },
        "league_id": "533133678566834176",
        "is_owner": false,
        "is_bot": false,
        "display_name": "mstratton11",
        "avatar": "1fe089e517448d9fe207b8607ca8e81b"
    },
    {
        "user_id": "459787778549346304",
        "settings": null,
        "metadata": {
            "user_message_pn": "on",
            "transaction_waiver": "off",
            "transaction_trade": "on",
            "transaction_free_agent": "off",
            "transaction_commissioner": "off",
            "trade_block_pn": "on",
            "team_name_update": "on",
            "team_name": "Golden Taint Warriors",
            "player_nickname_update": "on",
            "player_like_pn": "on",
            "mention_pn": "on",
            "mascot_message_emotion_leg_1": "action_hurt02",
            "mascot_message": "on",
            "mascot_item_type_id_leg_9": "heavy-metal",
            "mascot_item_type_id_leg_8": "heavy-metal",
            "mascot_item_type_id_leg_7": "heavy-metal",
            "mascot_item_type_id_leg_6": "heavy-metal",
            "mascot_item_type_id_leg_5": "heavy-metal",
            "mascot_item_type_id_leg_4": "heavy-metal",
            "mascot_item_type_id_leg_3": "heavy-metal",
            "mascot_item_type_id_leg_2": "heavy-metal",
            "mascot_item_type_id_leg_17": "heavy-metal",
            "mascot_item_type_id_leg_16": "heavy-metal",
            "mascot_item_type_id_leg_15": "heavy-metal",
            "mascot_item_type_id_leg_14": "heavy-metal",
            "mascot_item_type_id_leg_13": "heavy-metal",
            "mascot_item_type_id_leg_12": "heavy-metal",
            "mascot_item_type_id_leg_11": "heavy-metal",
            "mascot_item_type_id_leg_10": "heavy-metal",
            "mascot_item_type_id_leg_1": "heavy-metal",
            "join_voice_pn": "on",
            "allow_pn": "off"
        },
        "league_id": "533133678566834176",
        "is_owner": false,
        "is_bot": false,
        "display_name": "TJBright",
        "avatar": "b987f66667023baafadeb2051a35b7c1"
    },
    {
        "user_id": "459787785499308032",
        "settings": null,
        "metadata": {
            "user_message_pn": "on",
            "transaction_waiver": "on",
            "transaction_trade": "on",
            "transaction_free_agent": "on",
            "transaction_commissioner": "on",
            "team_name_update": "on",
            "team_name": "Golden Tate Warriors",
            "player_nickname_update": "on",
            "mention_pn": "on",
            "mascot_message_emotion_leg_2": "idle_happy",
            "mascot_message_emotion_leg_1": "action_joy01",
            "mascot_message": "on",
            "mascot_item_type_id_leg_9": "titan-up",
            "mascot_item_type_id_leg_8": "titan-up",
            "mascot_item_type_id_leg_7": "titan-up",
            "mascot_item_type_id_leg_6": "titan-up",
            "mascot_item_type_id_leg_5": "titan-up",
            "mascot_item_type_id_leg_4": "titan-up",
            "mascot_item_type_id_leg_3": "titan-up",
            "mascot_item_type_id_leg_2": "titan-up",
            "mascot_item_type_id_leg_17": "titan-up",
            "mascot_item_type_id_leg_16": "titan-up",
            "mascot_item_type_id_leg_15": "titan-up",
            "mascot_item_type_id_leg_14": "titan-up",
            "mascot_item_type_id_leg_13": "titan-up",
            "mascot_item_type_id_leg_12": "titan-up",
            "mascot_item_type_id_leg_11": "titan-up",
            "mascot_item_type_id_leg_10": "titan-up",
            "mascot_item_type_id_leg_1": "titan-up",
            "allow_pn": "on"
        },
        "league_id": "533133678566834176",
        "is_owner": false,
        "is_bot": false,
        "display_name": "MikeyRiot",
        "avatar": "57f33d088aabd468d8b40dded32426b4"
    },
    {
        "user_id": "459791062030872576",
        "settings": null,
        "metadata": {
            "team_name": "Green Eggs and Bekham",
            "mention_pn": "on",
            "mascot_message_emotion_leg_1": "idle",
            "mascot_item_type_id_leg_9": "furrari",
            "mascot_item_type_id_leg_8": "furrari",
            "mascot_item_type_id_leg_7": "furrari",
            "mascot_item_type_id_leg_6": "furrari",
            "mascot_item_type_id_leg_5": "furrari",
            "mascot_item_type_id_leg_4": "furrari",
            "mascot_item_type_id_leg_3": "furrari",
            "mascot_item_type_id_leg_2": "furrari",
            "mascot_item_type_id_leg_17": "furrari",
            "mascot_item_type_id_leg_16": "furrari",
            "mascot_item_type_id_leg_15": "furrari",
            "mascot_item_type_id_leg_14": "furrari",
            "mascot_item_type_id_leg_13": "furrari",
            "mascot_item_type_id_leg_12": "furrari",
            "mascot_item_type_id_leg_11": "furrari",
            "mascot_item_type_id_leg_10": "furrari",
            "mascot_item_type_id_leg_1": "furrari",
            "allow_pn": "on"
        },
        "league_id": "533133678566834176",
        "is_owner": false,
        "is_bot": false,
        "display_name": "lucasdeay",
        "avatar": "4ba072e6248388d12d79bfee723b9155"
    },
    {
        "user_id": "460239525851951104",
        "settings": null,
        "metadata": {
            "user_message_pn": "off",
            "transaction_waiver": "on",
            "transaction_trade": "on",
            "transaction_free_agent": "on",
            "transaction_commissioner": "on",
            "team_name_update": "off",
            "player_nickname_update": "off",
            "mention_pn": "on",
            "mascot_message_emotion_leg_1": "idle_happy",
            "mascot_message": "off",
            "mascot_item_type_id_leg_9": "titan-up",
            "mascot_item_type_id_leg_8": "titan-up",
            "mascot_item_type_id_leg_7": "titan-up",
            "mascot_item_type_id_leg_6": "titan-up",
            "mascot_item_type_id_leg_5": "titan-up",
            "mascot_item_type_id_leg_4": "titan-up",
            "mascot_item_type_id_leg_3": "titan-up",
            "mascot_item_type_id_leg_2": "titan-up",
            "mascot_item_type_id_leg_17": "titan-up",
            "mascot_item_type_id_leg_16": "titan-up",
            "mascot_item_type_id_leg_15": "titan-up",
            "mascot_item_type_id_leg_14": "titan-up",
            "mascot_item_type_id_leg_13": "titan-up",
            "mascot_item_type_id_leg_12": "titan-up",
            "mascot_item_type_id_leg_11": "titan-up",
            "mascot_item_type_id_leg_10": "titan-up",
            "mascot_item_type_id_leg_1": "titan-up",
            "allow_pn": "off"
        },
        "league_id": "533133678566834176",
        "is_owner": false,
        "is_bot": false,
        "display_name": "Emags21",
        "avatar": "742a9945bbbe992e56db3884006cd326"
    },
    {
        "user_id": "460510043725361152",
        "settings": null,
        "metadata": {
            "user_message_pn": "on",
            "transaction_waiver": "on",
            "transaction_trade": "on",
            "transaction_free_agent": "on",
            "transaction_commissioner": "on",
            "team_name_update": "on",
            "team_name": "Geoffreton Football Team ",
            "player_nickname_update": "on",
            "mention_pn": "on",
            "mascot_message_emotion_leg_1": "idle_happy",
            "mascot_message": "on",
            "mascot_item_type_id_leg_9": "panpan",
            "mascot_item_type_id_leg_8": "panpan",
            "mascot_item_type_id_leg_7": "panpan",
            "mascot_item_type_id_leg_6": "panpan",
            "mascot_item_type_id_leg_5": "panpan",
            "mascot_item_type_id_leg_4": "panpan",
            "mascot_item_type_id_leg_3": "panpan",
            "mascot_item_type_id_leg_2": "panpan",
            "mascot_item_type_id_leg_17": "panpan",
            "mascot_item_type_id_leg_16": "panpan",
            "mascot_item_type_id_leg_15": "panpan",
            "mascot_item_type_id_leg_14": "panpan",
            "mascot_item_type_id_leg_13": "panpan",
            "mascot_item_type_id_leg_12": "panpan",
            "mascot_item_type_id_leg_11": "panpan",
            "mascot_item_type_id_leg_10": "panpan",
            "mascot_item_type_id_leg_1": "panpan",
            "allow_pn": "on"
        },
        "league_id": "533133678566834176",
        "is_owner": false,
        "is_bot": false,
        "display_name": "geoffam",
        "avatar": "4c36f6cc68ca5fb2daae149ee6bbee44"
    },
    {
        "user_id": "532971434637471744",
        "settings": null,
        "metadata": {
            "team_name": "CeeDeez Nuts",
            "mention_pn": "on",
            "allow_pn": "on"
        },
        "league_id": "533133678566834176",
        "is_owner": false,
        "is_bot": false,
        "display_name": "Zman8388",
        "avatar": "6f925123e8c7894bf1cddb0e21a9ae71"
    }
  ];

  const median = arr => {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };

// make underscore like mustache
_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};

const matchupTemplate = _.template(
`<div class="col-xs-1 col-lg-6 col-xl-4">
    <div class="matchup-card card shadow mb-4 text-center">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">{{matchupTitle}}</h6>
        </div>
        <div class="card-body">
            <div class="d-inline-block font-weight-bold font-size-lg text-primary">{{winningScore}}<sup id="winning-score-median">{{winningScoreMedian}}</sup> to</div>
            <div class="d-inline-block font-weight-bold text-primary">{{losingScore}}<sup id="losing-score-median">{{losingScoreMedian}}</sup></div>
        </div>
    </div>
</div>`);

// Call the dataTables jQuery plugin
$(document).ready(function () {

    $.ajax({
        method: 'GET',
        url: 'https://api.sleeper.app/v1/league/533133678566834176/matchups/2'
      })
      .done(startingRosters => {


        let totalPoints = 0;
        let matchups = [];
        let scores = [];

        for ( const startingRoster of startingRosters ) {

            startingRoster.owner_id = rosterToOwnerMap.find( roster => roster.roster_id === startingRoster.roster_id ).owner_id;
            startingRoster.ownerData = players.find( player => player.user_id === startingRoster.owner_id );
            totalPoints += Number(startingRoster.points);
            scores.push(startingRoster.points);

            const existingMatchup = matchups.find( matchup => matchup.matchup_id === startingRoster.matchup_id );

            if (existingMatchup) {
                // ensure the winner is at index 0
                if (existingMatchup.rosters[0].points > startingRoster.points) {
                    existingMatchup.rosters.push(startingRoster);
                } else {
                    existingMatchup.rosters.unshift(startingRoster);
                }
            } else {
                matchups.push({
                    matchup_id: startingRoster.matchup_id,
                    rosters: [startingRoster]
                });
            }
        }

        // update league info cards
        $('#league-point-total').text( totalPoints.toFixed(2) );
        const leagueMedian = median(scores);
        $('#league-median-score').text(leagueMedian.toFixed(2) );
        const highScore = _.max(scores);
        const highScoreTeam = startingRosters[scores.indexOf(highScore)].ownerData.display_name;
        $('#week-high-score').text( highScore.toFixed(2) );
        $('#high-score-team-name').text( highScoreTeam );
        const lowScore = _.min(scores);
        const lowScoreTeam = startingRosters[scores.indexOf(lowScore)].ownerData.display_name;
        
        $('#week-low-score').text( _.min(scores).toFixed(2) );
        $('#low-score-team-name').text( lowScoreTeam );

        // create matchup cards
        matchups.forEach(matchup => {

            const winningTeamName = players.find( player => player.user_id === matchup.rosters[0].owner_id ).display_name;
            const losingTeamName = players.find( player => player.user_id === matchup.rosters[1].owner_id ).display_name;
            
            const matchupTitle = `${winningTeamName} def. ${losingTeamName}`;
            const winningScore = matchup.rosters[0].points.toFixed(2);
            const losingScore = matchup.rosters[1].points.toFixed(2);
            const winningScoreMedian = winningScore > leagueMedian ? 'W' : 'L';
            const losingScoreMedian = losingScore > leagueMedian ? 'W' : 'L';

            $('#matchups-container').append( matchupTemplate({ matchupTitle, winningScore, winningScoreMedian, losingScore, losingScoreMedian, matchupId: matchup.matchup_id }) );
        });        
      });
});