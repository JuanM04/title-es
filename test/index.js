// Packages
const test = require("ava");

// Source
const title = require("../");

test((t) => {
  const from = "aPi 2.0: loguéAtE con vercel, NUeva DocuMENTACióN y MáS";
  const to = "API 2.0: Loguéate con Vercel, Nueva Documentación y Más";

  t.is(title(from), to);
});

test((t) => {
  const from =
    "axel KicIlloF anUNciÓ que pagarÁ $500 pOr día a enferMos de corOnavirus que se alojEn en ceNtrOs extraHospiTaLaRIoS";
  const to =
    "Axel Kicillof Anunció Que Pagará $500 por Día a Enfermos de Coronavirus Que Se Alojen en Centros Extrahospitalarios";

  t.is(title(from), to);
});

test((t) => {
  const from = "las mayúsculas donde corresponden";
  const to = "Las Mayúsculas Donde Corresponden";

  t.is(title(from), to);
});

test((t) => {
  const from = "dijo que sería “muy loco”";
  const to = "Dijo Que Sería “Muy Loco”";

  t.is(title(from), to);
});

test((t) => {
  const from = "mI mArCa está Re poTENte";
  const to = "Mi MARcA Está Re Potente";

  t.is(
    title(from, {
      special: ["MARcA"],
    }),
    to
  );
});

test((t) => {
  const from = "y OTRas Cómo FacebOOk o MICROSoft";
  const to = "Y Otras Cómo facebook o Microsoft";

  t.is(
    title(from, {
      special: ["facebook", "Microsoft"],
    }),
    to
  );
});

test("no debería capitalizar dentro de paréntesis adyacentes", (t) => {
  let from = "uno(a) es importante";
  let to = "Uno(a) es Importante";
  t.is(title(from), to);

  from = "(s)uuuu suuu";
  to = "(s)uuuu Suuu";
  t.is(title(from), to);
});
