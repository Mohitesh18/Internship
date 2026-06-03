function searchByCategory(category, news) {
  const filterednews = [];
  for (let i = 0; i < news.length; i++) {
    if (news[i].category.toLowerCase() == category.toLowerCase()) {
      filterednews.push(news[i]);
    }
  }
  return filterednews;
}

function searchterm(term,news){
    const filterednews=[];
    for(let i=0; i<news.length; i++){
        if(news[i].news.toLowerCase().includes(term.toLowerCase())){
            filterednews.push(news[i]);
        }
    }
    return filterednews;
}
module.exports = {
  searchByCategory,
  searchterm,
};