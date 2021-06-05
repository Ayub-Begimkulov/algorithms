// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

function climbingLeaderboard(ranked, player) {
  ranked = removeDuplicates(ranked);
  const result = [];
  let rankingIndex = ranked.length;
  for (let i = 0, l = player.length; i < l; i++) {
    const playerScore = player[i];
    // remembering index so we don't
    // have to double check low indexes
    rankingIndex = findRankingIndex(ranked, playerScore, rankingIndex);
    result.push(rankingIndex + 1);
  }
  return result;
}

function findRankingIndex(rankings, score, index) {
  for (let i = index - 1; i >= 0; i--) {
    if (score > rankings[i]) {
      continue;
    } else if (score === rankings[i]) {
      return i;
    } else {
      return i + 1;
    }
  }
  return 0;
}

function removeDuplicates(arr) {
  let prev = null;
  const result = [];
  for (let i = 0, l = arr.length; i < l; i++) {
    if (prev === arr[i]) {
      continue;
    }
    prev = arr[i];
    result.push(arr[i]);
  }
  return result;
}

console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 102]));
