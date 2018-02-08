/*eslint-disable unknown-require */
'use strict';

var fetch = require('node-fetch');
var myGlobal = {};


/**
 * Gets the current battles
 * @return {object}
 */
module.exports.getCurrentStages = function() {
  var apiData = fetch('https://splatoon2.ink/data/schedules.json').then(res => res.json());
  var splatoon2Data;
  apiData.then(function (json) {
      //league
      var leagueDataMode = json.league[0].rule.name;
      var leagueDataStageA = json.league[0].stage_a.name;
      var leagueDataStageB = json.league[0].stage_b.name;
      var leagueDataStart = json.league[0].start_time;
      var leagueDataEnd = json.league[0].end_time;
      //ranked
      var rankedDataMode = json.gachi[0].rule.name;
      var rankedDataStageA = json.gachi[0].stage_a.name;
      var rankedDataStageB = json.gachi[0].stage_b.name;
      var rankedDataStart = json.gachi[0].start_time;
      var rankedDataEnd = json.gachi[0].end_time;
      //regular
      var regularDataMode = json.regular[0].rule.name;
      var regularDataStageA = json.regular[0].stage_a.name;
      var regularDataStageB = json.regular[0].stage_b.name;
      var regularDataStart = json.regular[0].start_time;
      var regularDataEnd = json.regular[0].end_time;
      // object
      splatoon2Data = {
        apiVersion: "0.3.1",
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
        }
      };
    });
    console.log(splatoon2Data);
    return splatoon2Data;
};
