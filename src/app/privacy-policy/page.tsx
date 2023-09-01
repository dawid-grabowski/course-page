import { type ReactElement } from "react";
import Link from "next/link";

export default async function PrivacyPolicy(): Promise<ReactElement> {
  return (
    <section className="mx-auto max-w-3xl px-6 md:px-0 w-screen min-h-screen flex justify-center pt-32 pb-16 text-zinc-400">
      <article>
        <h1 className="text-zinc-200 font-bold text-2xl md:text-3xl">
          Polityka prywatności
        </h1>
        <h2 className="text-zinc-300 font-semibold text-lg md:text-xl mt-6 mb-2">
          Definicje
        </h2>
        <ol>
          <li>
            <p className="text-sm md:text-md pb-1">
              1. <span className="font-bold">Administrator (my)</span> - Dawid
              Grabowski - GrabIT NIP: 7773399315, REGON: 524026749
            </p>
          </li>
          <li>
            <p className="text-sm md:text-md pb-1">
              2. <span className="font-bold">Dane osobowe</span> - wszystkie
              informacje o osobie fizycznej zidentyfikowanej lub możliwej do
              zidentyfikowania poprzez jeden bądź kilka szczególnych czynników
              określających fizyczną, fizjologiczną, genetyczną, psychiczną,
              ekonomiczną, kulturową lub społeczną tożsamość, w tym IP
              urządzenia, dane o lokalizacji, identyfikator internetowy oraz
              informacje gromadzone za pośrednictwem plików cookie oraz innej
              podobnej technologii.
            </p>
          </li>
          <li>
            <p className="text-sm md:text-md pb-1">
              3. <span className="font-bold">Polityka</span> - niniejsza
              Polityka prywatności.
            </p>
          </li>
          <li>
            <p className="text-sm md:text-md pb-1">
              4. <span className="font-bold">RODO</span> - Rozporządzenie
              Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
              2016 r. w sprawie ochrony osób fizycznych w związku z
              przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
              takich danych oraz uchylenia dyrektywy 95/46/WE.
            </p>
          </li>
          <li>
            <p className="text-sm md:text-md pb-1">
              5. <span className="font-bold">Serwis</span> - serwis internetowy
              prowadzony przez nas pod adresem{" "}
              <Link
                href="/"
                className="text-indigo-700 hover:text-indigo-600 transition-colors font-semibold"
              >
                www.grabowskidawid.com
              </Link>
            </p>
          </li>
          <li>
            <p className="text-sm md:text-md pb-1">
              6. <span className="font-bold">Użytkownik (Ty)</span> - każda
              osoba fizyczna odwiedzająca Serwis lub korzystająca z jednej albo
              kilku usług czy funkcjonalności opisanych w Polityce
            </p>
          </li>
        </ol>
        <h2 className="text-zinc-300 font-semibold text-lg md:text-xl mt-6 mb-2">
          Przetwarzanie danych w związku z korzystaniem z serwisu
        </h2>
        <p className="text-sm md:text-md pb-1">
          <p className="text-sm md:text-md pb-1">
            W związku z korzystaniem przez Ciebie z Serwisu zbieramy Twoje dane
            w zakresie niezbędnym do świadczenia poszczególnych oferowanych
            usług, a także informacje o Twojej aktywności w Serwisie. Poniżej
            zostały opisane szczegółowe zasady oraz cele przetwarzania danych
            osobowych gromadzonych podczas korzystania przez Ciebie z Serwisu.
          </p>
        </p>
        <h2 className="text-zinc-300 font-semibold text-lg md:text-xl mt-6 mb-2">
          Cele oraz podstawy prawne przetwarzania danych w serwisie
        </h2>
        <ol>
          <li>
            <p className="text-sm md:text-md pb-1">
              1. Przetwarzamy dane osobowe wszystkich osób korzystających z
              Serwisu (w tym: imię, nazwisko, adres korespondencyjny, adres
              email, numer telefonu, adres IP, typ urządzenia, rodzaj
              oprogramowania) , adres IP lub inne identyfikatory oraz informacje
              gromadzone za pośrednictwem plików cookies lub innych podobnych
              technologii), a niebędących zarejestrowanymi Użytkownikami (tj.
              osoby nieposiadające profilu w Serwisie) w następujących celach:
            </p>
            <ol className="ml-8">
              <li>
                <p className="text-sm md:text-md pb-1">
                  1.1 w celu świadczenia usług drogą elektroniczną w zakresie
                  udostępniana Użytkownikom treści gromadzonych w Serwisie –
                  wówczas podstawą prawną przetwarzania jest niezbędność
                  przetwarzania do wykonania umowy (art. 6 ust. 1 lit b RODO);
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  1.2 w celach analitycznych i statystycznych – wówczas podstawą
                  prawną przetwarzania jest nasz uzasadniony interes (art. 6
                  ust. 1 lit f RODO) polegający na prowadzeniu analiz aktywności
                  Użytkowników, a także ich preferencji w celu poprawy
                  stosowanych funkcjonalności i świadczonych usług;
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  1.3 w celu ewentualnego ustalenia i dochodzenia roszczeń lub
                  obrony przed nimi – podstawą prawną przetwarzania jest nasz
                  uzasadniony interes (art. 6 ust. 1 lit f RODO) polegający na
                  ochronie naszych praw;
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  1.4 w celach marketingowych (naszych oraz naszych partnerów),
                  w szczególności związanych z prezentowaniem reklamy
                  behawioralnej – zasady przetwarzania danych osobowych w celach
                  marketingowych zostały opisane w sekcji „MARKETING”.
                </p>
              </li>
            </ol>
          </li>
          <li>
            <p className="text-sm md:text-md pb-1 pt-3">
              2. Twoja Aktywność w Serwisie, w tym Twoje dane osobowe, są
              rejestrowane w logach systemowych. Zebrane w logach informacje
              przetwarzane są przede wszystkim w celach związanych ze
              świadczeniem usług. Przetwarzamy je również w celach technicznych,
              administracyjnych, na potrzeby zapewnienia bezpieczeństwa systemu
              informatycznego oraz zarządzania tym systemem, a także w celach
              analitycznych i statystycznych – w tym zakresie podstawą prawną
              przetwarzania jest nasz prawnie uzasadniony interes (art. 6 ust. 1
              lit. f RODO).
            </p>
          </li>
        </ol>
        <h2 className="text-zinc-300 font-semibold text-lg md:text-xl mt-6 mb-2">
          Rejestracja w serwisie
        </h2>
        <ol>
          <li>
            <p className="text-sm md:text-md pb-1 pt-3">
              3. Podczas rejestracji w Serwisie zostaniesz proszony są o podanie
              danych niezbędnych do utworzenia i obsługi konta. W celu
              ułatwienia obsługi możesz podać dodatkowe dane, wyrażając tym
              samym zgodę na ich przetwarzanie. Takie dane można w każdym czasie
              usunąć. Podanie danych oznaczonych jako obowiązkowe jest wymagane
              w celu założenia i obsługi konta, a ich niepodanie spowoduje, że
              nie będziemy mogli założyć Twojego konta. Podanie pozostałych
              danych jest dobrowolne.
            </p>
          </li>
          <li>
            <p className="text-sm md:text-md pb-1">
              4. Twoje dane osobowe są przetwarzane:
            </p>
            <ol className="ml-8">
              <li>
                <p className="text-sm md:text-md pb-1">
                  4.1 w celu świadczenia usług związanych z prowadzeniem i
                  obsługą konta w Serwisie – podstawą prawną przetwarzania jest
                  niezbędność przetwarzania do wykonania umowy (art. 6 ust. 1
                  lit b RODO), a w zakresie danych podanych fakultatywnie –
                  podstawą prawną przetwarzania jest zgoda (art. 6 ust. 1 lit a
                  RODO);
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  4.2 w celach analitycznych i statystycznych – podstawą prawną
                  przetwarzania jest nasz uzasadniony interes (art. 6 ust. 1 lit
                  f RODO) polegający na prowadzeniu analiz aktywności
                  Użytkowników w Serwisie i sposobu korzystania z konta, a także
                  ich preferencji w celu poprawy stosowanych funkcjonalności;
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  4.3 w celu ewentualnego ustalenia i dochodzenia roszczeń lub
                  obrony przed nimi – podstawą prawną przetwarzania jest nasz
                  uzasadniony interes (art. 6 ust. 1 lit f RODO) polegający na
                  ochronie naszych praw.
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  4.4 w celach marketingowych (naszych oraz naszych partnerów) –
                  zasady przetwarzania danych osobowych w celach marketingowych
                  zostały opisane w sekcji „MARKETING”.
                </p>
              </li>
            </ol>
          </li>
          <li>
            <p className="text-sm md:text-md pb-1 pt-3">
              5. W przypadku, gdy Serwis umożliwia logowanie za pośrednictwem
              innych portali jak, np. Facebook, Google, Instagram, Twitter,
              Apple), Serwis pobierze z Twojego konta w ramach danego portalu
              jedynie dane niezbędne do rejestracji i obsługi konta. Poprzez
              samodzielną zmianę ustawień wtyczki możesz w łatwy sposób
              rozszerzyć zakres pobieranych danych o takie, które mogą być
              przydatne przy korzystaniu z funkcjonalności konta w Serwisie.
            </p>
          </li>
        </ol>
        <h2 className="text-zinc-300 font-semibold text-lg md:text-xl mt-6 mb-2">
          Korzystanie z płatnych usług w serwisie
        </h2>
        <ol>
          <li>
            <p className="text-sm md:text-md pb-1">
              6. Jeżeli złożysz zamówienie (zakupu towaru lub usługi) w
              Serwisie, będziemy przetwarzali Twoje dane osobowe w następujących
              celach:
            </p>
            <ol className="ml-8">
              <li>
                <p className="text-sm md:text-md pb-1">
                  6.1 w celu realizacji złożonego zamówienia – podstawą prawną
                  przetwarzania jest niezbędność przetwarzania do wykonania
                  umowy (art. 6 ust. 1 lit b RODO); w zakresie danych podanych
                  fakultatywnie podstawą prawną przetwarzania jest zgoda (art. 6
                  ust. 1 lit a RODO);
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  6.2 w celu realizacji obowiązków ustawowych ciążących na nas,
                  a wynikających w szczególności z przepisów podatkowych i
                  przepisów o rachunkowości – podstawą prawną przetwarzania jest
                  obowiązek prawny (art. 6 ust. 1 lit c RODO);
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  6.3 w celach analitycznych i statystycznych – podstawą prawną
                  przetwarzania jest nasz uzasadniony interes (art. 6 ust. 1 lit
                  f RODO) polegający na prowadzeniu analiz Twojej aktywności w
                  Serwisie, a także Twoich preferencji zakupowych w celu
                  doskonalenia stosowanych funkcjonalności;
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  6.4 w celu ewentualnego ustalenia i dochodzenia roszczeń lub
                  obrony przed nimi – podstawą prawną przetwarzania jest nasz
                  uzasadniony interes (art. 6 ust. 1 lit f RODO) polegający na
                  ochronie naszych praw.
                </p>
              </li>
            </ol>
          </li>
        </ol>
        <h2 className="text-zinc-300 font-semibold text-lg md:text-xl mt-6 mb-2">
          Formularze kontaktowe
        </h2>
        <ol>
          <li>
            <p className="text-sm md:text-md pb-1">
              7. W Serwisie zapewniamy możliwość skontaktowania się z nami przy
              wykorzystaniu elektronicznych formularzy kontaktowych.
              Skorzystanie z formularza wymaga podania Twoich danych osobowych
              niezbędnych do tego, żebyśmy mogli się z Tobą skontaktować i
              udzielić odpowiedzi na zadane pytanie. W formularzu możesz podać
              także inne dane w celu ułatwienia nam kontaktu lub obsługi
              zapytania. Podanie danych oznaczonych jako obowiązkowe jest
              wymagane w celu przyjęcia i obsługi zapytania, a ich niepodanie
              spowoduje, że nie będziemy mogli obsłużyć Twojego pytania. Podanie
              pozostałych danych jest dobrowolne.
            </p>
          </li>
          <li>
            <p className="text-sm md:text-md pb-1">
              8. Dane osobowe, które prześlesz nam za pomocą formularza
              kontaktowego są przetwarzane:
            </p>
            <ol className="ml-8">
              <li>
                <p className="text-sm md:text-md pb-1">
                  8.1 w celu identyfikacji Ciebie jako nadawcy oraz obsługi
                  Twojego zapytania przesłanego przez udostępniony formularz –
                  podstawą prawną przetwarzania jest niezbędność przetwarzania
                  do wykonania umowy o świadczenie usługi (art. 6 ust. 1 lit b
                  RODO);
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  8.2 w celach analitycznych i statystycznych – podstawą prawną
                  przetwarzania jest nasz uzasadniony interes (art. 6 ust. 1 lit
                  f RODO) polegający na prowadzeniu statystyk zapytań
                  zgłaszanych przez Użytkowników za pośrednictwem Serwisu w celu
                  doskonalenia jego funkcjonalności.
                </p>
              </li>
            </ol>
          </li>
        </ol>
        <h2 className="text-zinc-300 font-semibold text-lg md:text-xl mt-6 mb-2">
          Marketing
        </h2>
        <ol>
          <li>
            <p className="text-sm md:text-md pb-1">
              9. Przetwarzamy Twoje dane osobowe w celu realizowania działań
              marketingowych, które mogą polegać na:
            </p>
            <ol className="ml-8">
              <li>
                <p className="text-sm md:text-md pb-1">
                  9.1 wyświetlaniu treści marketingowych, które nie są
                  dostosowane do Twoich preferencji (reklama kontekstowa);
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  9.2 wyświetlaniu treści marketingowych odpowiadających Twoim
                  zainteresowaniom (reklama behawioralna);
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  9.3 kierowaniu e-mailowych powiadomień o interesujących
                  ofertach lub treściach, które w niektórych przypadkach
                  zawierają informacje handlowe (usługa newslettera)
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  9.4 prowadzenie innego rodzaju działań związanych z
                  marketingiem bezpośrednim towarów i usług (przesyłanie
                  informacji handlowych drogą elektroniczną oraz działania
                  telemarketingowe)
                </p>
              </li>
            </ol>
          </li>
          <li>
            <p className="text-sm md:text-md pb-1 pt-3">
              10. W celu realizowania działań marketingowych, w niektórych
              przypadkach wykorzystujemy profilowanie (jeżeli wyrazisz na to
              zgodę). Oznacza to, że dzięki automatycznemu przetwarzaniu danych
              dokonujemy oceny wybranych czynników dotyczących osób fizycznych w
              celu analizy ich zachowania lub stworzenia prognozy na przyszłość.
            </p>
          </li>
        </ol>
        <h2 className="text-zinc-300 font-semibold text-lg md:text-xl mt-6 mb-2">
          Marketing bezpośredni
        </h2>
        <ol>
          <li>
            <p className="text-sm md:text-md pb-1">
              11. Twoje Dane osobowe mogą być również wykorzystywane przez nas,
              abyśmy mogli kierować do Ciebie treści marketingowe różnymi
              kanałami, tj. za pośrednictwem poczty e-mail, drogą MMS / SMS lub
              telefonicznie. Takie działania podejmujemy wyłącznie w przypadku,
              gdy wyraziłeś na nie zgodę, którą może wycofać w dowolnym
              momencie.
            </p>
          </li>
        </ol>
        <h2 className="text-zinc-300 font-semibold text-lg md:text-xl mt-6 mb-2">
          Portale społecznościowe
        </h2>
        <ol>
          <li>
            <p className="text-sm md:text-md pb-1">
              12. Przetwarzamy Twoje dane osobowe, gdy odwiedzasz nasz profile
              prowadzone w mediach społecznościowych (Facebook, YouTube,
              Instagram, Twitter). Dane te są przetwarzane wyłącznie w związku z
              prowadzeniem profilu, w tym w celu informowania Cię o naszej
              aktywności oraz promowaniu różnego rodzaju wydarzeń, usług oraz
              produktów. Podstawą prawną przetwarzania danych osobowych w tym
              celu jest nasz uzasadniony interes (art. 6 ust. 1 lit. f RODO)
              polegający na promowaniu własnej marki.
            </p>
          </li>
        </ol>
        <h2 className="text-zinc-300 font-semibold text-lg md:text-xl mt-6 mb-2">
          Pliki cookies oraz podobna technologia
        </h2>
        <ol>
          <li>
            <p className="text-sm md:text-md pb-1">
              13. Pliki cookies to małe pliki tekstowe instalowane na Twoim
              urządzeniu, gdy przeglądasz Serwis. Cookies zbierają informacje
              ułatwiające korzystanie ze strony internetowej – np. poprzez
              zapamiętywanie Twoich odwiedzin w Serwisie i dokonywanych przez
              Ciebie czynności. W ramach Serwisu możemy stosować następujące
              rodzaje cookies:
            </p>
          </li>
        </ol>
        <h2 className="text-zinc-300 font-semibold text-lg md:text-xl mt-6 mb-2">
          Cookies &apos;serwisowe&apos;
        </h2>
        <ol>
          <li>
            <p className="text-sm md:text-md pb-1">
              14. Wykorzystujemy tzw. cookies serwisowe przede wszystkim w celu
              dostarczania Ci usług świadczonych drogą elektroniczną oraz
              poprawy jakości tych usług. W związku z tym my oraz inne podmioty
              świadczące na naszą rzecz usługi analityczne i statystyczne
              korzystają z plików cookies, przechowując informacje lub uzyskując
              dostęp do informacji już przechowywanych w Twoim
              telekomunikacyjnym urządzeniu końcowym (komputer, telefon, tablet
              itp.). Pliki cookies wykorzystywane w tym celu obejmują:
            </p>
            <ol className="ml-8">
              <li>
                <p className="text-sm md:text-md pb-1">
                  14.1 pliki cookies z danymi wprowadzanymi przez Ciebie
                  (identyfikator sesji) na czas trwania sesji (ang. user input
                  cookies);
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  14.2 uwierzytelniające pliki cookies wykorzystywane do usług
                  wymagających uwierzytelniania na czas trwania sesji (ang.
                  authentication cookies);
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  14.3 pliki cookies służące do zapewnienia bezpieczeństwa, np.
                  wykorzystywane do wykrywania nadużyć w zakresie
                  uwierzytelniania (ang. user centric security cookies);
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  14.4 sesyjne pliki cookies odtwarzaczy multimedialnych (np.
                  pliki cookies odtwarzacza flash), na czas trwania sesji (ang.
                  multimedia player session cookies);
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  14.5 trwałe pliki cookies służące do personalizacji interfejsu
                  Użytkownika na czas trwania sesji lub nieco dłużej (ang. user
                  interface customization cookies),
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  14.6 pliki cookies służące do monitorowania ruchu na stronie
                  internetowej, tj. analityki danych, w tym cookies Google
                  Analytics (są to pliki wykorzystywane przez spółkę Google w
                  celu analizy w jaki sposów korzystasz z Serwisu, do tworzenia
                  statystyk i raportów dotyczących funkcjonowania Serwisu).
                  Google nie wykorzystuje zebranych danych do identyfikacji
                  Użytkownika ani nie łączy tych informacji w celu umożliwienia
                  identyfikacji. Szczegółowe informacje o zakresie i zasadach
                  zbierania danych w związku z tą usługą można znaleźć pod
                  linkiem:
                  https://www.google.com/intl/pl/policies/privacy/partners.
                </p>
              </li>
            </ol>
          </li>
        </ol>
        <h2 className="text-zinc-300 font-semibold text-lg md:text-xl mt-6 mb-2">
          Zarządzanie cookies
        </h2>
        <ol>
          <li>
            <p className="text-sm md:text-md pb-1">
              15. My oraz nasi zaufani partnerzy wykorzystujemy również pliki
              cookies do celów marketingowych, m.in. w związku z kierowaniem do
              Ciebie reklamy behawioralnej. W tym celu my oraz nasi zaufani
              partnerzy przechowujemy informacje lub uzyskujemy dostęp do
              informacji już przechowywanych w Twoim telekomunikacyjnym
              urządzeniu końcowym (komputer, telefon, tablet itp.).
              Wykorzystanie plików cookies oraz zebranych za ich pośrednictwem
              danych osobowych w celach marketingowych, w szczególności w
              zakresie promowania usług i towarów podmiotów trzecich, wymaga
              uzyskania Twojej zgody, która może być w każdym momencie wycofana.
            </p>
          </li>
        </ol>
        <h2 className="text-zinc-300 font-semibold text-lg md:text-xl mt-6 mb-2">
          Cookies &apos;serwisowe&apos;
        </h2>
        <ol>
          <li>
            <p className="text-sm md:text-md pb-1">
              16. Jeśli nie chcesz otrzymywać plików cookies, możesz zmienić
              ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików
              cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa,
              utrzymania preferencji użytkownika może utrudnić korzystanie z
              Serwisu.
            </p>
          </li>
          <li>
            <p className="text-sm md:text-md pb-1">
              17. W celu zarządzania ustawienia cookies wybierz z listy poniżej
              przeglądarkę internetową, której używasz i postępuj zgodnie z
              instrukcjami:
            </p>
            <ol className="ml-8">
              <li>
                <p className="text-sm md:text-md pb-1">17.1 Edge</p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  17.2 Internet Explorer
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">17.3 Chrome</p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">17.4 Safari</p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">17.5 Firefox</p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">17.6 Opera</p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  17.7 Urządzenia mobilne:
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">17.8 Android</p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">17.9 Safari (iOS)</p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">17.10 Windows Phone</p>
              </li>
            </ol>
          </li>
        </ol>
        <h2 className="text-zinc-300 font-semibold text-lg md:text-xl mt-6 mb-2">
          Istotne techniki marketingowe
        </h2>
        <ol>
          <li>
            <p className="text-sm md:text-md pb-1">
              18. Cel i zakres gromadzenia danych oraz ich dalszego
              przetwarzania i wykorzystania przez usługodawców, jak również
              możliwość kontaktu oraz prawa Użytkownika w tym zakresie zostały
              opisane w polityce prywatności usługodawców: Możemy stosować
            </p>
            <ol className="ml-8">
              <li>
                <p className="text-sm md:text-md pb-1">
                  18.1{" "}
                  <Link href="https://www.facebook.com/policy.php">
                    https://www.facebook.com/policy.php
                  </Link>
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  18.2{" "}
                  <Link href="https://policies.google.com/privacy?hl=pl&gl=ZZ">
                    https://policies.google.com/privacy?hl=pl&gl=ZZ.
                  </Link>
                </p>
              </li>
            </ol>
          </li>
          <li>
            <p className="text-sm md:text-md pb-1">
              19. Możemy stosować techniki remarketingowe, pozwalające na
              dopasowanie przekazów reklamowych do Twojego zachowania w
              Serwisie, co może dawać złudzenie, że Twoje dane osobowe są
              wykorzystywane do śledzenia, jednak w praktyce nie przekazujemy
              żadnych Twoich danych osobowych operatorom reklam. Technologicznym
              warunkiem takich działań jest włączona obsługa plików cookie.
            </p>
          </li>
          <li>
            <p className="text-sm md:text-md pb-1">
              20. Możemy stosować rozwiązanie badające zachowanie użytkowników
              poprzez tworzenie map ciepła oraz nagrywanie zachowania w
              Serwisie. Te informacje są anonimizowane zanim zostaną przesłane
              do operatora usługi tak, że nie wie on jakiej osoby fizycznej one
              dotyczą. W szczególności nagrywaniu nie podlegają wpisywane hasła
              oraz inne dane osobowe.
            </p>
          </li>
        </ol>
        <h2 className="text-zinc-300 font-semibold text-lg md:text-xl mt-6 mb-2">
          Okres przetwarzania danych osobowych
        </h2>
        <ol>
          <li>
            <p className="text-sm md:text-md pb-1">
              21. Okres przez jaki przetwamy Twoje dane zależy od rodzaju
              świadczonej usługi i celu przetwarzania. Co do zasady dane
              przetwarzane są przez czas świadczenia usługi lub realizowania
              zamówienia, do czasu wycofania przez Ciebie wyrażonej zgody lub
              zgłoszenia skutecznego sprzeciwu względem przetwarzania danych (w
              przypadkach, gdy podstawą prawną przetwarzania danych jest nasz
              uzasadniony interes).
            </p>
          </li>
          <li>
            <p className="text-sm md:text-md pb-1">
              22. Okres przetwarzania danych może być przedłużony w przypadku,
              gdy przetwarzanie jest niezbędne do ustalenia i dochodzenia
              ewentualnych roszczeń lub obrony przed nimi, a po tym czasie
              jedynie w przypadku i w zakresie, w jakim będą wymagać tego
              przepisy prawa.
            </p>
          </li>
          <li>
            <p className="text-sm md:text-md pb-1">
              23. Po upływie okresu przetwarzania Twoje dane są nieodwracalnie
              usuwane lub anonimizowane.
            </p>
          </li>
        </ol>
        <h2 className="text-zinc-300 font-semibold text-lg md:text-xl mt-6 mb-2">
          Twoje uprawnienia
        </h2>
        <ol>
          <li>
            <p className="text-sm md:text-md pb-1">
              24. W związku z tym, że przetwarzamy Twoje dane osobowe,
              przysługują Ci następujące prawa:
            </p>
            <ol className="ml-8">
              <li>
                <p className="text-sm md:text-md pb-1">
                  24.1{" "}
                  <span className="font-bold">
                    prawo do informacji o przetwarzaniu danych osobowych
                  </span>{" "}
                  – na tej podstawie, na Twój wniosek przekażemy Ci informację o
                  przetwarzaniu danych, w tym przede wszystkim o celach i
                  podstawach prawnych przetwarzania, zakresie posiadanych
                  danych, podmiotach, którym są ujawniane, i planowanym terminie
                  usunięcia danych;
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  24.2{" "}
                  <span className="font-bold">
                    prawo uzyskania kopii danych
                  </span>{" "}
                  – na tej podstawie, na Twój wniosek przekażemy Ci kopię
                  przetwarzanych danych dotyczących osoby zgłaszającej żądanie;
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  24.3 <span className="font-bold">prawo do sprostowania</span>{" "}
                  – na Twój wniosek jesteśmy zobowiązani usuwać ewentualne
                  niezgodności lub błędy przetwarzanych danych osobowych oraz
                  uzupełniać je, jeśli są niekompletne;
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  24.4{" "}
                  <span className="font-bold">prawo do usunięcia danych</span> –
                  na tej podstawie możesz żądać usunięcia danych, których
                  przetwarzanie nie jest już niezbędne do realizowania żadnego z
                  celów, dla których zostały zebrane;
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  24.5{" "}
                  <span className="font-bold">
                    prawo do ograniczenia przetwarzania
                  </span>{" "}
                  – na tej podstawie, na Twój wniosek zaprzestaniemy wykonywania
                  operacji na Twoich danych osobowych – z wyjątkiem operacji, na
                  które wyraziłeś zgodę – oraz ich przechowywania, zgodnie z
                  przyjętymi zasadami retencji lub dopóki nie ustaną przyczyny
                  ograniczenia przetwarzania danych;
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  24.6{" "}
                  <span className="font-bold">
                    prawo do przenoszenia danych
                  </span>{" "}
                  – na tej podstawie – w zakresie, w jakim Twoje dane są
                  przetwarzane w związku z zawartą umową lub wyrażoną zgodą –
                  wydamy Ci dostarczone przez Ciebie dane w formacie
                  pozwalającym na ich odczyt przez komputer. Możesz także
                  zażądać, abyśmy przesłali te dane innemu podmiotowi – jednak
                  pod warunkiem, że mamy do tego odpowiednie możliwości
                  techniczne.
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  24.7{" "}
                  <span className="font-bold">
                    prawo sprzeciwu wobec przetwarzania danych w celach
                    marketingowych
                  </span>{" "}
                  – możesz w każdym momencie sprzeciwić się przetwarzaniu danych
                  osobowych w celach marketingowych, bez konieczności
                  uzasadnienia takiego sprzeciwu;
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  24.8{" "}
                  <span className="font-bold">
                    prawo sprzeciwu wobec innych celów przetwarzania danych
                  </span>{" "}
                  – Możesz w każdym momencie sprzeciwić się przetwarzaniu danych
                  osobowych, które odbywa się na podstawie naszego uzasadnionego
                  interesu (np. dla celów analitycznych lub statystycznych albo
                  ze względów związanych z ochroną mienia); sprzeciw w tym
                  zakresie powinien zawierać uzasadnienie;
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  24.9 <span className="font-bold">prawo wycofania zgody</span>{" "}
                  – jeśli dane przetwarzane są na podstawie Twojej zgody, masz
                  prawo ją wycofać w dowolnym momencie, co jednak nie wpływa na
                  zgodność z prawem przetwarzania dokonanego przed wycofaniem
                  zgody.
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  24.10 <span className="font-bold">prawo do skargi</span> –
                  jeżeli uznasz, że sposób w jaki przetwarzamy Twoje dane
                  osobowe narusza przepisy RODO lub inne przepisy dotyczące
                  ochrony danych osobowych, możesz złożyć skargę do Prezesa
                  Urzędu Ochrony Danych Osobowych.
                </p>
              </li>
            </ol>
          </li>
        </ol>
        <h2 className="text-zinc-300 font-semibold text-lg md:text-xl mt-6 mb-2">
          Odbiorcy danych
        </h2>
        <ol>
          <li>
            <p className="text-sm md:text-md pb-1">
              25. W związku z tym, że chcemy realizować dla Ciebie jak najlepsze
              usługi, będziemy ujawniać Twoje dane osobowe naszym zaufanym
              partnerom, w tym w szczególności dostawcom odpowiedzialnym za
              obsługę systemów informatycznych, podmiotom takim jak banki i
              operatorzy płatności, podmioty świadczące usługi księgowe,
              kurierzy (w związku z realizacją zamówienia), agencje marketingowe
              (w zakresie usług marketingowych) oraz naszym podmiotom
              powiązanym.
            </p>
          </li>
          <li>
            <p className="text-sm md:text-md pb-1">
              26. Twoje dane osobowe będą udostępnione innym podmiotom do ich
              własnych celów, w tym celów marketingowych tylko jeżeli wyrazisz
              na to zgodę.
            </p>
          </li>
        </ol>
        <h2 className="text-zinc-300 font-semibold text-lg md:text-xl mt-6 mb-2">
          Odbiorcy danych
        </h2>
        <ol>
          <li>
            <p className="text-sm md:text-md pb-1">
              27. Poziom ochrony danych osobowych poza Europejskim Obszarem
              Gospodarczym (EOG) może różnić się od tego zapewnianego przez
              prawo europejskie. Z tego powodu będziemy przekazywali Twoje dane
              osobowe poza EOG tylko wtedy, gdy jest to konieczne, i z
              zapewnieniem odpowiedniego stopnia ochrony. Za każdym razem
              zostaniesz o tym powiadomiony.
            </p>
          </li>
        </ol>
        <h2 className="text-zinc-300 font-semibold text-lg md:text-xl mt-6 mb-2">
          Bezpieczeństwo danych osobowych
        </h2>
        <ol>
          <li>
            <p className="text-sm md:text-md pb-1">
              28. Wiedz, że podejmujemy wszelkie kroki w celu zapewnienia, że
              Twoje dane osobowe będą przetwarzane są przez nas w sposób
              bezpieczny – zapewniający przede wszystkim, że dostęp do Twoich
              danych mają jedynie osoby upoważnione i jedynie w zakresie, w
              jakim jest to niezbędne ze względu na wykonywane przez nie
              zadania.
            </p>
          </li>
          <li>
            <p className="text-sm md:text-md pb-1">
              29. Podejmujemy wszelkie niezbędne działania, by nasi podwykonawcy
              i inne podmioty współpracujące dawały gwarancję stosowania
              odpowiednich środków bezpieczeństwa w każdym przypadku, gdy
              przetwarzają Twoje dane osobowe na nasze zlecenie.
            </p>
          </li>
        </ol>
        <h2 className="text-zinc-300 font-semibold text-lg md:text-xl mt-6 mb-2">
          Dane kontaktowe
        </h2>
        <ol>
          <li>
            <p className="text-sm md:text-md pb-1">
              30. We wszelkich sprawach, o którym mowa w niniejszej polityce, w
              szczególności związanych z przetwarzaniem Twoich danych osobowych,
              możesz się z nami skontaktować poprzez:
            </p>
            <ol className="ml-8">
              <li>
                <p className="text-sm md:text-md pb-1">
                  30.1 e-mail{" "}
                  <Link
                    href="mailto:kontakt@grabowskidawid.com"
                    className="text-indigo-700 hover:text-indigo-600 transition-colors font-semibold"
                  >
                    kontakt@grabowskidawid.com
                  </Link>
                </p>
              </li>
              <li>
                <p className="text-sm md:text-md pb-1">
                  30.2 listownie na adres Dawid Grabowski, Komorniki 62-052 ul.
                  Storczykowa 8/1
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </article>
    </section>
  );
}
