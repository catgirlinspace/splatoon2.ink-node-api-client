'use strict';

var axios = require('axios');

/**
 * Gets the current battles
 * @return {object}
 */
module.exports.getCurrentStages = function() {
  var leagueDataMode;
  var leagueDataStageA;
  var leagueDataStageB;
  var leagueDataStart;
  var leagueDataEnd;
  axios.get('https://splatoon2.ink/data/schedules.json')
    .then(function (res) {
      var leagueDataMode = res.data.league[0].rule.name;
      var leagueDataStageA = res.data.league[0].stage_a.name;
      var leagueDataStageB = res.data.league[0].stage_b.name;
      var leagueDataStart = res.data.league[0].start_time;
      var leagueDataEnd = res.data.league[0].end_time;
    })
    .catch(function (error) {
        console.log(error);
    });

    var data = {
        apiVersion: "0.1.1",
        league: {
          mode: leagueDataMode,
          stageA: leagueDataStageA,
          stageB: leagueDataStageB,
          start: leagueDataStart,
          end: leagueDataEnd
        }
    };
    return data;
};
