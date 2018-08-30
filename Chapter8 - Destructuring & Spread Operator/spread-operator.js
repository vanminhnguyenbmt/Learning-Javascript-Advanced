const iphones = ["iphone3", "iphone4", "iphone5"];
const macbooks = ["macbook2012", "macbook2013", "macbook2014"];

// 1. concat array

// cách thông thường
// const appleProducts = iphones.concat(macbooks);

// spread operator
const appleProducts = [...iphones, 'iphone6', 'iphone7s', 'macbook2011', ...macbooks, 'macbook2015'];

// 2. spread string
let arrString = [..."Nguyen"];

// 3. copy array

// không nên dùng cách gán như này
// const oldModels = iphones;

// sử dụng operator
const oldModels = [...iphones];
oldModels[0] = "iphone2";