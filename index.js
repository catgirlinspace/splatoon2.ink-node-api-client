'use strict';

var axios = require('axios');

/**
 * Gets the current battles
 * @return {object}
 */
module.exports.getCurrentStages = function() {
  //league
  var leagueDataMode;
  var leagueDataStageA;
  var leagueDataStageB;
  var leagueDataStart;
  var leagueDataEnd;
  //ranked
  var rankedDataMode;
  var rankedDataStageA;
  var rankedDataStageB;
  var rankedDataStart;
  var rankedDataEnd;
  //regular
  var regularDataMode;
  var regularDataStageA;
  var regularDataStageB;
  var regularDataStart;
  var regularDataEnd;
  axios.get('https://splatoon2.ink/data/schedules.json')
    .then(function (res) {
        //league
      var leagueDataMode = res.data.league[0].rule.name;
      var leagueDataStageA = res.data.league[0].stage_a.name;
      var leagueDataStageB = res.data.league[0].stage_b.name;
      var leagueDataStart = res.data.league[0].start_time;
      var leagueDataEnd = res.data.league[0].end_time;
      //ranked
      var rankedDataMode = res.data.gachi[0].rule.name;
      var rankedDataStageA = res.data.gachi[0].stage_a.name;
      var rankedDataStageB = res.data.gachi[0].stage_b.name;
      var rankedDataStart = res.data.gachi[0].start_time;
      var rankedDataEnd = res.data.gachi[0].end_time;
      //regular
      var regularDataMode = res.data.regular[0].rule.name;
      var regularDataStageA = res.data.regular[0].stage_a.name;
      var regularDataStageB = res.data.regular[0].stage_b.name;
      var regularDataStart = res.data.regular[0].start_time;
      var regularDataEnd = res.data.regular[0].end_time;
    });

    var data = {
        apiVersion: "0.2.0-0",
        league: {
          lobbyMode: 'league',
          mode: leagueDataMode,
          stageA: leagueDataStageA,
          stageB: leagueDataStageB,
          start: leagueDataStart,
          end: leagueDataEnd
        },
        ranked: {
          lobbyMode: 'ranked',
          mode: rankedDataMode,
          stageA: rankedDataStageA,
          stageB: rankedDataStageB,
          start: rankedDataStart,
          end: rankedDataEnd
        },
        regular: {
          lobbyMode: 'regular',
          mode: regularDataMode,
          stageA: regularDataStageA,
          stageB: regularDataStageB,
          start: regularDataStart,
          end: regularDataEnd
        },
    };
    return data;
};
