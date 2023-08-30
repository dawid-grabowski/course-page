import { type ReactElement } from "react";
import Link from "next/link";

export default async function PrivacyPolicy(): Promise<ReactElement> {
  return (
    <section className='mx-auto max-w-3xl w-screen min-h-screen flex justify-center pt-32 pb-16 text-zinc-400'>
      <article>
        <h1 className="text-zinc-200 font-bold text-3xl">Polityka prywatności</h1>
        <h2 className="text-zinc-300 font-semibold text-xl mt-6 mb-2">Definicje</h2>
        <ol>
          <li>
            <p className="text-md pb-1">
              1. <span className="font-bold">Administrator (my)</span> - Dawid Grabowski - GrabIT NIP: 7773399315, REGON: 524026749
            </p>
          </li>
          <li>
            <p className="text-md pb-1">
              2. <span className="font-bold">Dane osobowe</span> - wszystkie informacje o osobie fizycznej zidentyfikowanej lub możliwej do zidentyfikowania poprzez jeden bądź kilka szczególnych czynników określających fizyczną, fizjologiczną, genetyczną, psychiczną, ekonomiczną, kulturową lub społeczną tożsamość, w tym IP urządzenia, dane o lokalizacji, identyfikator internetowy oraz informacje gromadzone za pośrednictwem plików cookie oraz innej podobnej technologii.
            </p>
          </li>
          <li>
            <p className="text-md pb-1">
              3. <span className="font-bold">Polityka</span> - niniejsza Polityka prywatności.
            </p>
          </li>
          <li>
            <p className="text-md pb-1">
              4. <span className="font-bold">RODO</span> - Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE.
            </p>
          </li>
          <li>
            <p className="text-md pb-1">
              5. <span className="font-bold">Serwis</span> - serwis internetowy prowadzony przez nas pod adresem <Link href="/" className="text-indigo-700 hover:text-indigo-600 transition-colors font-semibold">www.grabowskidawid.com</Link>
            </p>
          </li>
          <li>
            <p className="text-md pb-1">
              6. <span className="font-bold">Użytkownik (Ty)</span> - każda osoba fizyczna odwiedzająca Serwis lub korzystająca z jednej albo kilku usług czy funkcjonalności opisanych w Polityce
            </p>
          </li>
        </ol>
        <h2 className="text-zinc-300 font-semibold text-xl mt-6 mb-2">Przetwarzanie danych w związku z korzystaniem z serwisu</h2>
        <p className="text-md pb-1">
          <p className="text-md pb-1">
            W związku z korzystaniem przez Ciebie z Serwisu zbieramy Twoje dane w zakresie niezbędnym do świadczenia poszczególnych oferowanych usług, a także informacje o Twojej aktywności w Serwisie. Poniżej zostały opisane szczegółowe zasady oraz cele przetwarzania danych osobowych gromadzonych podczas korzystania przez Ciebie z Serwisu.
          </p>
        </p>
        <h2 className="text-zinc-300 font-semibold text-xl mt-6 mb-2">Cele oraz podstawy prawne przetwarzania danych w serwisie</h2>
        <ol>
          <li>
            <p className="text-md pb-1">
              1. Przetwarzamy dane osobowe wszystkich osób korzystających z Serwisu (w tym: imię, nazwisko, adres korespondencyjny, adres email, numer telefonu, adres IP, typ urządzenia, rodzaj oprogramowania) , adres IP lub inne identyfikatory oraz informacje gromadzone za pośrednictwem plików cookies lub innych podobnych technologii), a niebędących zarejestrowanymi Użytkownikami (tj. osoby nieposiadające profilu w Serwisie) w następujących celach:
            </p>
            <ol className="ml-8">
              <li>
                <p className="text-md pb-1">
                  1.1 w celu świadczenia usług drogą elektroniczną w zakresie udostępniana Użytkownikom treści gromadzonych w Serwisie – wówczas podstawą prawną przetwarzania jest niezbędność przetwarzania do wykonania umowy (art. 6 ust. 1 lit b RODO);
                </p>
              </li>
              <li>
                <p className="text-md pb-1">
                  1.2 w celach analitycznych i statystycznych – wówczas podstawą prawną przetwarzania jest nasz uzasadniony interes (art. 6 ust. 1 lit f RODO) polegający na prowadzeniu analiz aktywności Użytkowników, a także ich preferencji w celu poprawy stosowanych funkcjonalności i świadczonych usług;
                </p>
              </li>
              <li>
                <p className="text-md pb-1">
                  1.3 w celu ewentualnego ustalenia i dochodzenia roszczeń lub obrony przed nimi – podstawą prawną przetwarzania jest nasz uzasadniony interes (art. 6 ust. 1 lit f RODO) polegający na ochronie naszych praw;
                </p>
              </li>
              <li>
                <p className="text-md pb-1">
                  1.4 w celach marketingowych (naszych oraz naszych partnerów), w szczególności związanych z prezentowaniem reklamy behawioralnej – zasady przetwarzania danych osobowych w celach marketingowych zostały opisane w sekcji „MARKETING”.
                </p>
              </li>
            </ol>
          </li>
          <li>
            <p className="text-md pb-1 pt-3">
              2. Twoja Aktywność w Serwisie, w tym Twoje dane osobowe, są rejestrowane w logach systemowych. Zebrane w logach informacje przetwarzane są przede wszystkim w celach związanych ze świadczeniem usług. Przetwarzamy je również w celach technicznych, administracyjnych, na potrzeby zapewnienia bezpieczeństwa systemu informatycznego oraz zarządzania tym systemem, a także w celach analitycznych i statystycznych – w tym zakresie podstawą prawną przetwarzania jest nasz prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO).
            </p>
          </li>
        </ol>
        <h2 className="text-zinc-300 font-semibold text-xl mt-6 mb-2">Rejestracja w serwisie</h2>
        <ol>
          <li>
            <p className="text-md pb-1 pt-3">
              3. Podczas rejestracji w Serwisie zostaniesz proszony są o podanie danych niezbędnych do utworzenia i obsługi konta. W celu ułatwienia obsługi możesz podać dodatkowe dane, wyrażając tym samym zgodę na ich przetwarzanie. Takie dane można w każdym czasie usunąć. Podanie danych oznaczonych jako obowiązkowe jest wymagane w celu założenia i obsługi konta, a ich niepodanie spowoduje, że nie będziemy mogli założyć Twojego konta. Podanie pozostałych danych jest dobrowolne.
            </p>
          </li>
          <li>
            <p className="text-md pb-1">
              4. Twoje dane osobowe są przetwarzane:
            </p>
            <ol className="ml-8">
              <li>
                <p className="text-md pb-1">
                  4.1 w celu świadczenia usług związanych z prowadzeniem i obsługą konta w Serwisie – podstawą prawną przetwarzania jest niezbędność przetwarzania do wykonania umowy (art. 6 ust. 1 lit b RODO), a w zakresie danych podanych fakultatywnie – podstawą prawną przetwarzania jest zgoda (art. 6 ust. 1 lit a RODO);
                </p>
              </li>
              <li>
                <p className="text-md pb-1">
                  4.2 w celach analitycznych i statystycznych – podstawą prawną przetwarzania jest nasz uzasadniony interes (art. 6 ust. 1 lit f RODO) polegający na prowadzeniu analiz aktywności Użytkowników w Serwisie i sposobu korzystania z konta, a także ich preferencji w celu poprawy stosowanych funkcjonalności;
                </p>
              </li>
              <li>
                <p className="text-md pb-1">
                  4.3 w celu ewentualnego ustalenia i dochodzenia roszczeń lub obrony przed nimi – podstawą prawną przetwarzania jest nasz uzasadniony interes (art. 6 ust. 1 lit f RODO) polegający na ochronie naszych praw.
                </p>
              </li>
              <li>
                <p className="text-md pb-1">
                  4.4 w celach marketingowych (naszych oraz naszych partnerów) – zasady przetwarzania danych osobowych w celach marketingowych zostały opisane w sekcji „MARKETING”.
                </p>
              </li>
            </ol>
          </li>
          <li>
            <p className="text-md pb-1 pt-3">
              5. W przypadku, gdy Serwis umożliwia logowanie za pośrednictwem innych portali jak, np. Facebook, Google, Instagram, Twitter, Apple), Serwis pobierze z Twojego konta w ramach danego portalu jedynie dane niezbędne do rejestracji i obsługi konta. Poprzez samodzielną zmianę ustawień wtyczki możesz w łatwy sposób rozszerzyć zakres pobieranych danych o takie, które mogą być przydatne przy korzystaniu z funkcjonalności konta w Serwisie.
            </p>
          </li>
        </ol><h2 className="text-zinc-300 font-semibold text-xl mt-6 mb-2">Korzystanie z płatnych usług w serwisie</h2>
        <ol>
          <li>
            <p className="text-md pb-1">
              6. Jeżeli złożysz zamówienie (zakupu towaru lub usługi) w Serwisie, będziemy przetwarzali Twoje dane osobowe w następujących celach:
            </p>
            <ol className="ml-8">
              <li>
                <p className="text-md pb-1">
                  6.1 w celu realizacji złożonego zamówienia – podstawą prawną przetwarzania jest niezbędność przetwarzania do wykonania umowy (art. 6 ust. 1 lit b RODO); w zakresie danych podanych fakultatywnie podstawą prawną przetwarzania jest zgoda (art. 6 ust. 1 lit a RODO);
                </p>
              </li>
              <li>
                <p className="text-md pb-1">
                  6.2 w celu realizacji obowiązków ustawowych ciążących na nas, a wynikających w szczególności z przepisów podatkowych i przepisów o rachunkowości – podstawą prawną przetwarzania jest obowiązek prawny (art. 6 ust. 1 lit c RODO);
                </p>
              </li>
              <li>
                <p className="text-md pb-1">
                  6.3 w celach analitycznych i statystycznych – podstawą prawną przetwarzania jest nasz uzasadniony interes (art. 6 ust. 1 lit f RODO) polegający na prowadzeniu analiz Twojej aktywności w Serwisie, a także Twoich preferencji zakupowych w celu doskonalenia stosowanych funkcjonalności;
                </p>
              </li>
              <li>
                <p className="text-md pb-1">
                  6.4 w celu ewentualnego ustalenia i dochodzenia roszczeń lub obrony przed nimi – podstawą prawną przetwarzania jest nasz uzasadniony interes (art. 6 ust. 1 lit f RODO) polegający na ochronie naszych praw.
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </article>
    </section>
  );
}
