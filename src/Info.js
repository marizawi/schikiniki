import { FaAirbnb, FaFacebookSquare } from "react-icons/fa";
import "./Info.css";

function Info() {
  return (
    <div className="info-wrapper">
      <span className="info-container">
        <img
          className="info-image"
          src={require(`./img/28.jpg`).default}
          title="info-image"
          alt="Schikiniki"
        />
        <span>
          <a
            className="info-link"
            href="https://www.airbnb.pl/rooms/30394194?guests=1&adults=1&s=67&unique_share_id=3d97ea21-ea53-448b-a21f-c9ed518871c4"
            target="_blank"
            rel="noreferrer"
            aria-label="Airbnb"
          >
            <FaAirbnb size={28} color="#FF5A5F" />
          </a>
          <a
            className="info-link"
            href="https://www.facebook.com/SchikiNiki/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookSquare size={28} color="#4267B2" />
          </a>
        </span>
      </span>
      <span className="info-description">
        Zapraszamy do naszego apartamentu w urokliwej dzielnicy Katowic-
        Nikiszowcu. Nikiszowiec jest historycznym osiedlem górniczym a przy tym
        jednym z najważniejszych miejsc wartych odwiedzenia w regionie. My sami
        jesteśmy zafascynowani jego historią (jesteśmy certyfikowanymi lokalnymi
        przewodnikami) i z chęcią oprowadzimy Was po zabytkowym osiedlu.
      </span>
      <span className="info-description">
        Apartament SchikiNiki jest bardzo komfortowym i przytulnym miejscem.
        Włożyliśmy serce w urządzenie go i mamy nadzieję móc Was w nim ugościć!
      </span>
      <h2 className="info-description-subtitle">Miejsce</h2>
      <span className="info-description">
        Starannie dobrane meble i elementy wystroju to w głównej mierze nasze
        znaleziska z targów staroci, które pieczołowicie odrestaurowaliśmy lub
        przerobiliśmy, nadając im nowe funkcje. Naszym zamierzeniem było
        urządzenie mieszkania, które nawiązuje stylem do dzielnicy, zatem
        znajdziecie w nim m.in. cegły na ścianie, oryginalne stare deski
        podłogowe, kredens, a w miejscu starego pieca kaflowego- nowy kominek,
        który, w razie potrzeby, umili Wam wieczór.
      </span>
      <span className="info-description">
        Dołożyliśmy wielu starań, by apartament był dobrze, klimatycznie
        oświetlony. Okna skierowane są na południowy- wschód, zatem w ciągu dnia
        jest jasno, natomiast wieczorami m.in. podświetlenie pod sufitem,
        sprawia, że apartament staje się jeszcze przytulniejszy. Właśnie ze
        względu na m.in. oświetlenie apartament jest wręcz wymarzonym miejscem
        do wszelkich sesji fotograficznych- zapraszamy z aparatami!
      </span>
      <span className="info-description">
        W części apartamentu zainstalowane jest ogrzewanie podłogowe (kuchnia,
        przedpokój, łazienka), w sypialni znajduje się grzejnik. Dodatkowo do
        Państwa dyspozycji pozostawiamy wspomniany już kominek.
      </span>
      <span className="info-description">
        W apartamencie znajduje się również zabudowany balkon, z którego możecie
        Państwo obserwować życie codzienne w Nikiszowieckim podwórzu.
      </span>
      <h2 className="info-description-subtitle">Dostęp dla gości</h2>
      <span className="info-description">
        Apartament jest w całości do Państwa dyspozycji. Znajduje się w jednym z
        budynków mieszkalnych wybudowanych na początku XX wieku, w którym, w
        sumie, mieści się 12 mieszkań. Apartament ulokowany jest na II piętrze i
        nie posiada dostępu do windy. W apartamencie znajduje się łazienka z
        prysznicem i toaletą, kuchnia połączona z pokojem dziennym oraz
        sypialnia.
      </span>
      <h2 className="info-description-subtitle">Inne ważne rzeczy</h2>
      <span className="info-description">
        Dzielnica Nikiszowiec jest cicha i spokojna. Okna mieszkania skierowane
        są na podwórze, więc do apartamentu nie dobiegają odgłosy samochodów.
        Oferujemy możliwość odbioru lub dowozu na dworzec lub lotnisko w
        Katowicach i w Krakowie.
      </span>
    </div>
  );
}

export default Info;
