let isfail = false;

const a = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isfail) {
      reject("tải thất bại");
    } else resolve("tải thành công");
  }, 2000);
});

const b = async () => {
  try {
    let c = await a;
    console.log(c);
  } catch(d) {
    console.log(d);
  }
};

b();
