/**
 * ÉTAPE 0 — Analyse couleurs du site client (Playwright).
 * Usage : npx tsx scripts/analyze-colors.ts  (npm i -D playwright && npx playwright install chromium)
 *
 * NB (Maison Talyn) : analyse réalisée à la livraison via extraction directe du site live.
 * Constat davidbralizz.com : template générique — police "Source Sans Pro", texte noir,
 * liens bleus par défaut rgb(0,0,238), aplats greige/crème incidentels. Aucune identité de marque.
 *
 * → Identité reconstruite autour du TANIN (produit signature), univers végétal & chaud :
 *   --ivoire   #FDFAF6  (fond principal, naturel)
 *   --tanin    #7D4E2D  (signature — taninothérapie)
 *   --creme    #F0E8DC  (sections alternées)
 *   --noir     #1A1714  (textes / sections sombres)
 *   --cuivre   #B8825A  (accent premium)
 */
import { chromium } from 'playwright'

async function main() {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1440, height: 1600 } })
  await page.goto('https://www.davidbralizz.com/', { waitUntil: 'networkidle' })
  await page.screenshot({ path: 'scripts/_site.png', fullPage: true })
  const css = await page.evaluate(() => {
    const cs = getComputedStyle(document.body)
    return { bg: cs.backgroundColor, color: cs.color, font: cs.fontFamily }
  })
  console.log('Site CSS:', css)
  console.log('Palette retenue : ivoire #FDFAF6 · tanin #7D4E2D · crème #F0E8DC · noir #1A1714 · cuivre #B8825A')
  await browser.close()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
