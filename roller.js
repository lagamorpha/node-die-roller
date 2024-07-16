function roller(sides) {
    return Math.floor(Math.random() * sides + 1);
}

exports.roller = roller;