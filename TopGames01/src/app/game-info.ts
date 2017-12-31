export class GameInfo {
    title: string;
    publisher: string;
    genre: string;
    year: number;

    static TopGames: GameInfo[] = [
        {
            title: "Arkanoid",
            publisher: "Imagine Software",
            genre: "Breakout/Pong",
            year: 1987
        },
        {
            title: "Jungle Trouble",
            publisher: "Durell Software Ltd",
            genre: "Adventure",
            year: 1983
        },
        {
            title: "Power Drift",
            publisher: "Activision Inc",
            genre: "Racing",
            year: 1989
        }
    ]
}