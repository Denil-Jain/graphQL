let games = [
    { id: '1', title: 'Halo', platform: ['Xbox', 'PC'] },
    { id: '2', title: 'Gears of War', platform: ['Xbox'] },
    { id: '3', title: 'Fortnite', platform: ['Xbox', 'PS4', 'PC'] },
    { id: '4', title: 'Call of Duty', platform: ['Xbox', 'PS4', 'PC'] },
    { id: '5', title: 'Minecraft', platform: ['Xbox', 'PS4', 'PC'] },
    { id: '6', title: 'Apex Legends', platform: ['Xbox', 'PS4', 'PC'] },
    { id: '7', title: 'Overwatch', platform: ['Xbox', 'PS4', 'PC'] },
]

let authors = [
    { id: '1', name: 'John Doe', verified: true },
    { id: '2', name: 'Jane Doe', verified: false },
    { id: '3', name: 'John Smith', verified: true },
    { id: '4', name: 'Jane Smith', verified: false },
]

let reviews = [
    { id: '1', rating: 5, comment: 'Great game!', author_id: '1', game_id: '1' },
    { id: '2', rating: 4, comment: 'Good game!', author_id: '2', game_id: '2' },
    { id: '3', rating: 3, comment: 'Okay game!', author_id: '3', game_id: '3' },
    { id: '4', rating: 2, comment: 'Bad game!', author_id: '4', game_id: '4' },
    { id: '5', rating: 1, comment: 'Terrible game!', author_id: '1', game_id: '5' },
    { id: '6', rating: 5, comment: 'Great game!', author_id: '2', game_id: '6' },
    { id: '7', rating: 4, comment: 'Good game!', author_id: '3', game_id: '7' },
    { id: '8', rating: 3, comment: 'Okay game!', author_id: '4', game_id: '1' },
    { id: '9', rating: 2, comment: 'Bad game!', author_id: '1', game_id: '2' },
    { id: '10', rating: 1, comment: 'Terrible game!', author_id: '2', game_id: '3' },
]

export default { games, authors, reviews }