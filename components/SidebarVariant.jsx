"use client";
import styled, { keyframes } from "styled-components";
import { FaHouse, FaBoxOpen, FaUsers, FaChartLine, FaBookOpen, FaPuzzlePiece, FaGear, FaCircleQuestion } from "react-icons/fa6";

const brand = "#14203d";
const ink = "#0f172a";
const light = "#f1f5f9";

const AsideBase = styled.aside`
  font-family: "Nunito", sans-serif;
  user-select: none;
`;

const Brand = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  letter-spacing: 0.3px;
  font-size: 1.1rem;
`;

const GroupTitle = styled.div`
  font-weight: 900;
  font-size: 0.78rem;
  opacity: 0.7;
  margin: 18px 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;

const Nav = styled.nav`
  display: grid;
  gap: 6px;
`;

const Item = styled.a`
  display: grid;
  grid-template-columns: 24px 1fr auto;
  gap: 10px;
  align-items: center;
  text-decoration: none;
  padding: 10px 12px;
  border-radius: 12px;
  font-weight: 800;
  transition: 0.18s ease;
  outline: none;
  .ic {
    text-align: center;
    font-size: 1rem;
  }
  .kbd {
    font-size: 0.72rem;
    opacity: 0.7;
  }
`;

//  Primary Variant
const Primary = styled(AsideBase)`
  width: 260px;
  height: 100%;
  background: ${brand};
  color: #eaf2ff;
  border-radius: 18px;
  padding: 18px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  box-shadow: 0 12px 28px rgba(20, 32, 61, 0.35);

  ${Item} {
    color: #eaf2ff;
  }
  ${Item}:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateX(2px);
  }
  ${Item}[data-active="true"] {
    background: rgba(255, 255, 255, 0.18);
  }
  ${GroupTitle} {
    color: #cfe0ff;
  }
`;

//  Outline Variant
const Outline = styled(AsideBase)`
  width: 260px;
  height: 100%;
  background: #fff;
  color: ${ink};
  border: 2px solid ${ink};
  border-radius: 18px;
  padding: 18px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  box-shadow: 0 10px 26px rgba(2, 8, 23, 0.1);

  ${Item} {
    color: ${ink};
  }
  ${Item}:hover {
    background: ${light};
  }
`;

//  Rail Variant
const Rail = styled(AsideBase)`
  width: 84px;
  height: 100%;
  background: #14203d;
  color: #ffffff;
  border-radius: 18px;
  padding: 16px 10px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  box-shadow: 0 12px 26px rgba(2, 8, 23, 0.35);

  ${Brand} {
    margin-bottom: 15px;
    font-size: 1rem;
    text-align: center;
    color: #ffffff;
  }

  ${Nav} {
    gap: 6px;
  }

  ${Item} {
    grid-template-columns: 1fr;
    justify-items: center;
    border-radius: 14px;
    padding: 12px 10px;
    color: #ffffff;

    .ic {
      font-size: 1.25rem;
      color: #ffffff;
    }
  }

  ${Item}:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-1px);
  }

  ${Item}[data-active="true"] {
    background: rgba(255, 255, 255, 0.22);
  }

  ${Item} .label {
    display: none; /* tetap hidden */
  }
`;

//  Animated Variant
const breathe = keyframes`
  0% { background-color: #14203d; }
  50% { background-color: #18275a; }
  100% { background-color: #14203d; }
`;

const wiggle = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-6deg); }
  50% { transform: rotate(6deg); }
  75% { transform: rotate(-3deg); }
  100% { transform: rotate(0deg); }
`;

const floatParticle = keyframes`
  0% {
    transform: translateY(0);
    opacity: .25;
  }
  50% {
    transform: translateY(-14px);
    opacity: .45;
  }
  100% {
    transform: translateY(0);
    opacity: .25;
  }
`;

const ParticleLayer = styled.div`
  pointer-events: none;
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 1;

  span {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255,255,255,.35);
    box-shadow: 0 0 10px rgba(255,255,255,.35);
    animation: ${floatParticle} 7s ease-in-out infinite;
  }

  /* posisi & timing manual (SSR-safe) */
  span:nth-child(1)  { top: 14%; left: 18%; animation-delay: 0s; }
  span:nth-child(2)  { top: 26%; left: 72%; animation-delay: 1.2s; }
  span:nth-child(3)  { top: 38%; left: 32%; animation-delay: 2.4s; }
  span:nth-child(4)  { top: 52%; left: 62%; animation-delay: 3.6s; }
  span:nth-child(5)  { top: 64%; left: 22%; animation-delay: 4.8s; }
  span:nth-child(6)  { top: 76%; left: 78%; animation-delay: 6s; }
  span:nth-child(7)  { top: 18%; left: 48%; animation-delay: 2s; }
  span:nth-child(8)  { top: 44%; left: 12%; animation-delay: 3.2s; }
  span:nth-child(9)  { top: 58%; left: 88%; animation-delay: 5.4s; }
  span:nth-child(10) { top: 72%; left: 42%; animation-delay: 6.6s; }
  span:nth-child(11) { top: 30%; left: 8%;  animation-delay: 1.8s; }
  span:nth-child(12) { top: 86%; left: 58%; animation-delay: 7.2s; }
`;

const Animated = styled(AsideBase)`
  position: relative;
  overflow: hidden;
  z-index: 0;
  width: 260px;
  height: 100%;
  background: #14203d;
  color: #eaf2ff;
  border-radius: 18px;
  padding: 18px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  box-shadow: 0 12px 28px rgba(20, 32, 61, 0.4);

  animation: ${breathe} 8s ease-in-out infinite;

  ${Brand} {
    color: #ffffff;
  }

  ${GroupTitle} {
    color: #cfe0ff;
  }

  ${Item} {
    color: #eaf2ff;
    transition: 0.2s ease;
    z-index: 2;
  }

  ${Item}:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(2px);
  }

  /* icon wiggle on hover */
  ${Item}:hover .ic {
    animation: ${wiggle} 0.45s ease-in-out;
  }

  ${Item}[data-active="true"] {
    background: rgba(255, 255, 255, 0.2);
  }
`;


const itemsMain = [
  { ic: <FaHouse />, label: "Dashboard", kbd: "D", key: "dash" },
  { ic: <FaBoxOpen />, label: "Products", kbd: "P", key: "prod" },
  { ic: <FaUsers />, label: "Customers", kbd: "C", key: "cust" },
  { ic: <FaChartLine />, label: "Analytics", kbd: "A", key: "ana" },
];
const itemsUtil = [
  { ic: <FaGear />, label: "Settings", key: "set" },
  { ic: <FaCircleQuestion />, label: "Help", key: "help" },
];

function renderItems(list, activeKey) {
  return (
    <Nav>
      {list.map((it) => (
        <Item key={it.key} href="#" data-active={activeKey === it.key}>
          <span className="ic">{it.ic}</span>
          <span className="label">{it.label}</span>
          {it.kbd ? <span className="kbd">{it.kbd}</span> : <span />}
        </Item>
      ))}
    </Nav>
  );
}

export default function SidebarVariant({ variant = "primary", active = "dash" }) {
  if (variant === "primary") {
    return (
      <Primary>
        <Brand>Primary</Brand>
        <div>
          <GroupTitle>Main</GroupTitle>
          {renderItems(itemsMain, active)}
          <GroupTitle style={{ marginTop: 14 }}>Library</GroupTitle>
          {renderItems(
            [
              { ic: <FaBookOpen />, label: "Docs", key: "docs" },
              { ic: <FaPuzzlePiece />, label: "Components", key: "comp" },
            ],
            active
          )}
        </div>
        <div>{renderItems(itemsUtil, active)}</div>
      </Primary>
    );
  }

  if (variant === "outline") {
    return (
      <Outline>
        <Brand>Outline</Brand>
        <div>
          <GroupTitle>Navigasi</GroupTitle>
          {renderItems(itemsMain, active)}
        </div>
        <div>{renderItems(itemsUtil, active)}</div>
      </Outline>
    );
  }

if (variant === "animated") {
  return (
    <Animated>
      <ParticleLayer>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </ParticleLayer>

      <Brand>Animated</Brand>

      <div>
        <GroupTitle>Main</GroupTitle>
        {renderItems(itemsMain, active)}

        <GroupTitle style={{ marginTop: 14 }}>Library</GroupTitle>
        {renderItems(
          [
            { ic: <FaBookOpen />, label: "Docs", key: "docs" },
            { ic: <FaPuzzlePiece />, label: "Components", key: "comp" },
          ],
          active
        )}
      </div>

      <div>{renderItems(itemsUtil, active)}</div>
    </Animated>
  );
}

  return (
    <Rail>
      <Brand>Rail</Brand>
      <div>{renderItems(itemsMain, active)}</div>
      <div>{renderItems(itemsUtil, active)}</div>
    </Rail>
  );
}
