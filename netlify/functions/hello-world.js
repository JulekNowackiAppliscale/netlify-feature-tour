exports.handler = async () => {
    return {
        statusCode: 200,
        body: "Hello World",
    };
};


exports.handler = async () => {
    const mySecret = process.env.MY_SECRET;
    return {
      statusCode: 200,
      body: `hello world! I have a ${mySecret}`
    };
  };
  