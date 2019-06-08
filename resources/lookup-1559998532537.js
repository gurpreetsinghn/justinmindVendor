(function(window, undefined) {
  var dictionary = {
    "f9985700-b3ba-489e-a80f-9f8043332823": "My Category",
    "bc3315fb-8ceb-4757-9d01-ddc9740b7ac9": "MAKE PAYMENT",
    "edadb403-55a6-4487-bc98-181382b91099": "Address",
    "0f73eb60-f343-479b-ab0f-828da6ba360e": "Shop Address",
    "3ea7ad19-a9de-49ac-883b-c5a6b5b4a03b": "subcat",
    "c1ad5c33-35df-474f-b541-cd64edefc3a4": "Bank Detail",
    "384e0777-03d0-4802-9e9e-8a78f7dbf47e": "PAYMENT",
    "d2da056c-a96d-44fd-aacf-c4fb02e796cc": "Nav",
    "fc3524fe-4015-4132-a436-b61fa3a1f3a9": "My account",
    "7e84dbf7-ef51-454c-a4b0-684439cabf3c": "My Earnings",
    "8ab53486-d338-4bb7-a8cc-628c20f56503": "Order Details",
    "2e7445e4-af9a-4cb2-9495-438d88a91d9c": "Login",
    "ae56c68d-a7aa-41eb-8308-d6a3504a322f": "signup",
    "172fc6fb-439c-4f36-a520-4bc32fd2e96b": "subcat uncheck",
    "20d2267b-9037-4c71-9d6d-ed5792ccb420": "cart",
    "a275aebd-5a17-4ad1-bf5d-cbaa02c373de": "My Bank Detail",
    "402e18e0-206e-40a2-951f-c54fd4b6afc9": "List",
    "c9767d5f-4cc2-43c2-91c0-b949ba42a761": "My Orders",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "splash",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "0301ac40-598f-458f-9533-4f16ac4d14b0": "cat",
    "644113e6-e405-429e-bb83-9d27c9ef1d5d": "cat other",
    "97f73eaa-c68b-4c27-8807-280d5936da4d": "signup",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);