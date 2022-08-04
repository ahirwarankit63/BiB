class ApiFeatures {
  constructor(query, queryStr) {
    //where query is a keyword and queryStr is the value of keyword
    this.query = query;
    this.queryStr = queryStr;

    // query in the url means anything after ?
    // for eg. "http://localhost:4000/product?keyword=RBTripathi"
    // so query is keyword=RBTripathi
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          //where ? is ternairy operator... mila to first wali condition and nahi milato 2nd wali condition
          name: {
            $regex: this.queryStr.keyword, // $regex is mongoDb operator use to search words
            $options: "i", //search any case insensitive words
          },
        }
      : {};
    console.log(keyword);

    this.query = this.query.find({ ...keyword });
    return this;
  }
}

module.exports = ApiFeatures;
