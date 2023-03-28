import "./Menubar_style.css"

function Menubar(){
  return (
    <>
      <nav className='menu-bar'>
        <a href="/#sectionTwo">
          <button className='button-tag'>팀 소개</button>
        </a>
        <a>
          <button className='button-tag'>팀 연혁</button>
        </a>
        <a>
          <button className='button-tag'>팀원 소개</button>
        </a>
        <a>
          <button className='button-tag'>팀 문화</button>
        </a>
        <a>
          <button className='button-tag'>프로젝트</button>
        </a>
      </nav>
    </>
  );
}

export default Menubar;