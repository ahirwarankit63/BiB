class ApiFeatures {
  constructor(query, queryStr) {
    //where query is a keyword and queryStr is the value of keyword
    this.query = query;
    this.queryStr = queryStr;

    // query in the url means anything after ?
    // for eg. "http://localhost:4000/product?keyword=RBTripathi"
    // so query is keyword=RBTripathi
  }

  // search products from category

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

  //   filter products for category
  filter() {
    const queryCopy = { ...this.queryStr }; //copying the querry so that it cannot interfear in main query

    // Removing some fields for category
    const removeFields = ["keyword", "page", "limit"];

    removeFields.forEach((key) => delete queryCopy[key]);

    // this.query = this.query.find(queryCopy);
    // return this;
  

  //   filter products PRICE & RATING for category
    //first of all convert the (queryCopy) in string

    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (key) => `$${key}`);



    this.query = this.query.find(JSON.parse(queryStr));
    
    
    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resultPerPage * (currentPage -1) ;
    this.querry = this.query.limit(resultPerPage).skip(skip);

    return this;
  }
}

module.exports = ApiFeatures;
