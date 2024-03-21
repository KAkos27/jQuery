const elem = $(".kivalaszt");
elem.eq(0).html("<h2>Hello jQuery</h2>");

const pElem = $("#masodik p");
pElem.text("Szegény emberek!");

const gomb = $("button");
gomb.on("click", () => {
  const tartalom = elem.eq(0).html();
  pElem.eq(0).html(tartalom);
});
