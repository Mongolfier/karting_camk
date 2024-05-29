import { FC } from "react";

export interface YaMapProps {
  className?: string;
}

export const YaMap: FC<YaMapProps> = (props) => {
  const { className } = props;
  
  return (
    <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
      <a
        href="https://yandex.ru/maps/org/tsamk/1750092070/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "0px",
        }}
      >
        ЦАМК
      </a>
      <a
        href="https://yandex.ru/maps/216/zelenograd/category/karting/215067206277/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "0px",
        }}
      >
        Картинг в Зеленограде
      </a>
      <a
        href="https://yandex.ru/maps/216/zelenograd/category/sports_club/184107297/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "14px",
        }}
      >
        Спортивный клуб, секция в Зеленограде
      </a>
      <iframe
        src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=37.248266%2C55.981263&mode=search&oid=1750092070&ol=biz&z=17"
        width="100%"
        height="100%"
        frameBorder="1"
        allowFullScreen={true}
        style={{ position: "relative" }}
        className={className}
      ></iframe>
    </div>
  );
};
