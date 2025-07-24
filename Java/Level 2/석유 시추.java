import java.util.*;

public class Oil {
    public int solution(int[][] land) {
        int answer = 0;
        int width = land[0].length;
        int height = land.length;

        for (int x = 0; x < width; x++) {
            Stack<int[]> path = new Stack<>();
            Set<String> visited = new HashSet<>();
            for (int y = 0; y < height; y++) {
                if (land[y][x] == 1 && !visited.contains(x + " " + y)) {
                    // dfs
                    path.push(new int[]{x, y});
                    visited.add(x + " " + y);
                    while (!path.isEmpty()) {
                        // land[y][x]
                        int[] cur = path.pop(); // curr[0] => x, curr[1] => y

                        int curX = cur[0];
                        int curY = cur[1];
                        // Up
                        if (curY - 1 >= 0 && land[curY - 1][curX] == 1 && !visited.contains(curX + " " + (curY - 1))) {
                            visited.add(curX + " " + (curY - 1));
                            path.push(new int[]{curX, curY - 1});
                        }
                        // Down
                        if (curY + 1 < height && land[curY + 1][curX] == 1 && !visited.contains(curX + " " + (curY + 1))) {
                            visited.add(curX + " " + (curY + 1));
                            path.push(new int[]{curX, curY + 1});
                        }
                        // Left
                        if (curX - 1 >= 0 && land[curY][curX - 1] == 1 && !visited.contains((curX - 1) + " " + curY)) {
                            visited.add((curX - 1) + " " + curY);
                            path.push(new int[]{curX - 1, curY});
                        }
                        // Right
                        if (curX + 1 < width && land[curY][curX + 1] == 1 && !visited.contains((curX + 1) + " " + curY)) {
                            visited.add((curX + 1) + " " + curY);
                            path.push(new int[]{curX + 1, curY});
                        }
                    }
                }
            }

            if (visited.size() > answer) answer = visited.size();
        }

        return answer;
    } // 정확도 100% 효율성 0%

    public int solutionMemoization(int[][] land) {
        int answer = 0;
        int width = land[0].length;
        int height = land.length;

        for (int x = 0; x < width; x++) {
            Stack<int[]> path = new Stack<>();
            HashMap<Integer, HashSet<Integer>> visited = new HashMap<>();
            for (int y = 0; y < height; y++) {
                if (land[y][x] == 1 && (!visited.containsKey(y) || !visited.get(y).contains(x))) {
                    // ready stack and memory
                    path.push(new int[]{x, y});
                    visited.computeIfAbsent(y, k -> new HashSet<>()).add(x);
                    // dfs
                    while (!path.isEmpty()) {
                        // land[y][x]
                        int[] cur = path.pop(); // curr[0] => x, curr[1] => y

                        int curX = cur[0];
                        int curY = cur[1];
                        // Up
                        if (curY - 1 >= 0 && land[curY - 1][curX] == 1 &&
                                (!visited.containsKey(curY - 1) || !visited.get(curY - 1).contains(curX))) {
                            visited.computeIfAbsent(curY - 1, k -> new HashSet<>()).add(curX);
                            path.push(new int[]{curX, curY - 1});
                        }
                        // Down
                        if (curY + 1 < height && land[curY + 1][curX] == 1 &&
                                (!visited.containsKey(curY + 1) || !visited.get(curY + 1).contains(curX))) {
                            visited.computeIfAbsent(curY + 1, k -> new HashSet<>()).add(curX);
                            path.push(new int[]{curX, curY + 1});
                        }
                        // Left
                        if (curX - 1 >= 0 && land[curY][curX - 1] == 1 &&
                                (!visited.containsKey(curY) || !visited.get(curY).contains(curX - 1))) {
                            visited.computeIfAbsent(curY, k -> new HashSet<>()).add(curX - 1);
                            path.push(new int[]{curX - 1, curY});
                        }
                        // Right
                        if (curX + 1 < width && land[curY][curX + 1] == 1 &&
                                (!visited.containsKey(curY) || !visited.get(curY).contains(curX + 1))) {
                            visited.computeIfAbsent(curY, k -> new HashSet<>()).add(curX + 1);
                            path.push(new int[]{curX + 1, curY});
                        }
                    }
                }
            }

//            System.out.println(visited);
            int oilCount = 0;
            for (HashSet<Integer> cur : visited.values()) {
                oilCount += cur.size();
            }
            if (oilCount > answer) answer = oilCount;
        }

        return answer;
    } // memoization 속도 최적화, 실행 속도는 빠르지만, 통과 실패

//    [
//            [0, 0, 0, 1, 1, 1, 0, 0],
//            [0, 0, 0, 0, 1, 1, 0, 0],
//            [1, 1, 0, 0, 0, 1, 1, 0],
//            [1, 1, 1, 0, 0, 0, 0, 0],
//            [1, 1, 1, 0, 0, 0, 1, 1]
//    ]
}
