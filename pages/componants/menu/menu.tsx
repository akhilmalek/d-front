import { Accordion } from "react-bootstrap";

type Props = {};

type menu = {
  name: string;
  link: any;
  sub: any;
};

// menu
const menus: menu[] = [
  {
    name: "England",
    link: "1",
    sub: [
      { name: "Arsenal", link: "0-0", sub: null },
      { name: "Liverpool", link: "0-1", sub: null },
      { name: "Manchester United", link: "0-2", sub: null },
    ],
  },
  { name: "Croatia", link: "0", sub: "" },
  {
    name: "Spain",
    link: "2",
    sub: [
      { name: "Barcelona", link: "2-0", sub: null },
      { name: "Real Madrid", link: "2-1", sub: null },
    ],
  },
  {
    name: "Germany",
    link: "3",
    sub: [
      { name: "Bayern Munich", link: "3-1", sub: null },
      { name: "Borrusia Dortmund", link: "3-2", sub: null },
    ],
  },
];

// menu end

export const Menu = ({}: Props) => {
  return (
    <div>
      <Accordion defaultActiveKey="0" alwaysOpen>
        {menus.map((menu: any, index: any) => {
          return (
            <>
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>{menu.name}</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    {menu.sub.length > 0 && (
                      <>
                        {menu.sub.map((c: any, index: any) => (
                          <li key={index}>
                            <a href="#">{c.name}</a>
                          </li>
                        ))}
                      </>
                    )}

                    {menu.sub.length == 0 && (
                      <>
                        <li>
                          <a>No Recoreds</a>
                        </li>
                      </>
                    )}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </>
          );
        })}
      </Accordion>
    </div>
  );
};
