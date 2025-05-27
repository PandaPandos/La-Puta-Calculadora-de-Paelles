
const frases = [
  "Qui no vulgui coça als collons, que no vagi a l'era.",                                 // “Qui no vulgui pols…” :contentReference[oaicite:1]{index=1}
  "No diguis coça als collons fins que no el tinguis al sac i ben lligat.",             // “No diguis blat…” :contentReference[oaicite:2]{index=2}
  "Al mal temps, coça als collons.",                                                    // “Al mal temps, bona cara” :contentReference[oaicite:3]{index=3}
  "A l'arbre caigut, tothom fa coça als collons.",                                      // “A l'arbre caigut…” :contentReference[oaicite:4]{index=4}
  "Qui dia passa, coça als collons empeny.",                                            // “Qui dia passa…” :contentReference[oaicite:5]{index=5}
  "Val més coça als collons que mai.",                                                  // “Val més tard que mai” :contentReference[oaicite:6]{index=6}
  "A cada ocell, el seu niu és coça als collons.",                                      // “A cada ocell…” :contentReference[oaicite:7]{index=7}
  "Qui molt abarca, coça als collons apreta.",                                          // “Qui molt abarca…” :contentReference[oaicite:8]{index=8}
  "A bon entenedor, coça als collons paraules.",                                        // “A bon entenedor…” :contentReference[oaicite:9]{index=9}
  "Cada terra fa coça als collons.",                                                   // “Cada terra fa sa guerra” :contentReference[oaicite:10]{index=10}
  "No hi ha coça als collons que cent anys duri.",                                      // “No hi ha mal que cent anys duri” :contentReference[oaicite:11]{index=11}
  "És millor el pa que la coça als collons.",                                          // “És millor el pa que el fadrí” :contentReference[oaicite:12]{index=12}
  "A grans mals, coça als collons.",                                                    // “A grans mals, grans remeis” :contentReference[oaicite:13]{index=13}
  "Qui no treballa, no menja coça als collons.",                                        // “Qui no treballa, no menja” :contentReference[oaicite:14]{index=14}
  "A l'ase gros, coça als collons estreny.",                                           // “A l'ase gros, el llit estreny” :contentReference[oaicite:15]{index=15}
  "A l'hivern, coça als collons viu.",                                                 // “A l’hivern, tota cuca viu” :contentReference[oaicite:16]{index=16}
  "Sobre coça als collons no hi ha res escrit.",                                       // “Sobre gustos no hi ha res escrit” :contentReference[oaicite:17]{index=17}
  "Qui coça als collons mana.",                                                         // “Qui paga mana” :contentReference[oaicite:18]{index=18}
  "D'on no n'hi ha, no en pot coça als collons.",                                      // “D'on no n'hi ha, no en pot rajar” :contentReference[oaicite:19]{index=19}
  "Qui no coça als collons, no mama.",                                                 // “Qui no plora, no mama” :contentReference[oaicite:20]{index=20}
  "Al cap d'any, cap de coça als collons.",                                            // “Al cap d'any, cap d'home” :contentReference[oaicite:21]{index=21}
  "A coça als collons feta, respecte.",                                                // “A muller feta, respecte” :contentReference[oaicite:22]{index=22}
  "Quan el mal ve d'enfora, poc coça als collons n'hi ha.",                             // “Quan el mal ve d'enfora…” :contentReference[oaicite:23]{index=23}
  "A grans filadors, gran coça als collons.",                                          // “A grans filadors, gran lliada” :contentReference[oaicite:24]{index=24}
  "Qui no es moc, és coça als collons.",                                               // “Qui no es moc, és mort” :contentReference[oaicite:25]{index=25}
  "De mica en mica s'omple la coça als collons.",                                      // “De mica en mica s’omple la pica” :contentReference[oaicite:26]{index=26}
  "A la coça als collons i al llit, al primer crit.",                                 // “A la taula i al llit…” :contentReference[oaicite:27]{index=27}
  "L'amistat i la coça als collons, al cap del dia.",                                 // “L’amistat i el vi, al cap del dia” :contentReference[oaicite:28]{index=28}
  "Qui no entén la coça als collons, no pinta res de pa.",                            // “Qui no entén la burla…” :contentReference[oaicite:29]{index=29}
  "A trenc d'alba, bona coça als collons.",                                            // “A trenc d'alba, bona paella” :contentReference[oaicite:30]{index=30}
  "A la coça als collons cal temps.",                                                  // “A l’oli cal temps” :contentReference[oaicite:31]{index=31}
  "La coça als collons tot ho venç.",                                                  // “La paciència tot ho venç” :contentReference[oaicite:32]{index=32}
  "La coça als collons del veí sempre és més verda.",                                 // “L’herba del veí…” :contentReference[oaicite:33]{index=33}
  "Qui fa la coça als collons, fa la trampa.",                                         // “Qui fa la llei, fa la trampa” :contentReference[oaicite:34]{index=34}
  "Dame coça als collons que lletja em fa.",                                          // “Dame foc que lletja em fa” :contentReference[oaicite:35]{index=35}
  "Més val coça als collons que curar.",                                               // “Més val prevenir que curar” :contentReference[oaicite:36]{index=36}
  "El món és coça als collons.",                                                       // “El món és un mocador” :contentReference[oaicite:37]{index=37}
  "Val més ser cap de coça als collons que cua de lleó.",                              // “Val més ser cap de rata…” :contentReference[oaicite:38]{index=38}
  "Qui no té memòria ha de tenir coça als collons.",                                  // “Qui no té memòria ha de tenir cames” :contentReference[oaicite:39]{index=39}
  "A la coça als collons estirat, a l'olla remenant.",                                // “A la taula estirat…” :contentReference[oaicite:40]{index=40}
  "A la coça als collons, bon foc.",                                                  // “A la paella, bon foc” :contentReference[oaicite:41]{index=41}
  "Qui va a coça als collons, perd el lloc.",                                         // “Qui va a llebre, perd el lloc” :contentReference[oaicite:42]{index=42}
  "A bona coça als collons s'hi aferra la fulla.",                                   // “A bon arbre s'hi aferra la fulla” :contentReference[oaicite:43]{index=43}
  "Qui ben coça als collons fa, evita propis errors.",                                // (adapt.)
  "Paella freda, coça als collons calenta.",                                          // (adapt.)
  "Cada gra comptat evita coça als collons.",                                        // (adapt.)
  "Qui canta seu despatx, rebrà coça als collons al capdavall.",                     // (adapt.)
  "No tot el que lluu és coça als collons.",                                          // (adapt.)
  "A l’aigua clara, coça als collons perla.",                                        // (adapt.)
  "Qui menja sense gana rep coça als collons en paga de pena.",                      // (adapt.)
  "Millor petita paella que gran coça als collons.",                                // (adapt.)
  "Paella i bon rotllo mantenen coça als collons a ratlla.",                         // (adapt.)
  "Qui reparteix paella, evita coça als collons als altres."                          // (adapt.)
];


const referencias = {
  fina:  { diamSup: 35, diamInf: 29.5, arroz: 130, caldo: 862.79 },
  paella:{ diamSup: 75, diamInf: 65,   arroz: 850, caldo: 3000   }
};

let DENS_ARROZ = 0, RATIO_CALDO = 0;

function areaSuperficie(dSup, dInf) {
  const dProm = (dSup + dInf) / 2;
  return Math.PI * (dProm / 2) ** 2;
}

function actualitzarReferencia() {
  const modo = document.getElementById('modo').value;
  const ref = referencias[modo];
  const areaRef = areaSuperficie(ref.diamSup, ref.diamInf);
  DENS_ARROZ = ref.arroz / areaRef;
  RATIO_CALDO = ref.caldo / ref.arroz;

  document.getElementById('diamSuperior').value = ref.diamSup;
  document.getElementById('diamInferior').value = ref.diamInf;
  document.getElementById('arroz').value = 0;
  document.getElementById('caldoTotal').value = 0;
}

function calcular() {
  const dSup = parseFloat(document.getElementById('diamSuperior').value);
  const dInf = parseFloat(document.getElementById('diamInferior').value);

  const areaAct = areaSuperficie(dSup, dInf);
  const arrozCalc = DENS_ARROZ * areaAct;
  const caldoIni = arrozCalc * RATIO_CALDO;

  document.getElementById('arroz').value = arrozCalc.toFixed(2);
  document.getElementById('caldoTotal').value = caldoIni.toFixed(2);

// Triar frase i mostrar
  const idx = Math.floor(Math.random() * frases.length);
  document.getElementById('frase').textContent = frases[idx];
}

actualitzarReferencia();