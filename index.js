class Formatter {
  static capitalize(str) {
    let newStr = str.split('');
    let firstLetter = newStr.shift().toUpperCase();
    return (firstLetter + newStr.join(''));
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9\-\'\s]/g, '');
  }

  static titleize(str) {
    const stopWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const words = str.split(" ");
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    for (let i = 1; i < words.length; i++) {
      if (!stopWords.includes(words[i].toLowerCase())) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
    }

    return words.join(" ");
  }
}