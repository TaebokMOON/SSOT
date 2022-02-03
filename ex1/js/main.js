

    $(function () {

      // GNB a요소 클릭시 스크롤 애니메이션 하기
      // a요소에 href='#아이디명'하면 바로이동은 가능  그러나 스크롤 애니메이션은 되지 않  // 는다!!!!! 제이쿼리에서 이것을 해주자~~~~~
      // 클릭 이벤트대상 : .gnb a

      $('.gnb a,.bnav a').click(function (e) {

        e.preventDefault() // a이동 막기!!!!!

        // 1. a요소에 href값 가져오기
        // -셋팅된 id값으로 위치이동할 것임!!!!
        let pid = $(this).attr('href')
        console.log('아이디:' + pid);

        // 2. 이동할 이이디 요소 위치의 left의 값 구하기
        // - 실제로 스크롤 이동을 위한것
        let pgpos = $(pid).offset().left;
        // offset() 메서드는 요쇼의 기본셋팅 정보를 리턴함
        // -top, left, width, height 등을 알 수 있음
        console.log('위치값:' + pgpos);

        // 3. 스크롤 애니메이션으로 페이지 이동하기!!
        // scrollLeft 속성은 가로 스크롤위치값
        // 스크롤 이동대상 : html,body
        // (범용선택용소 : 즉, 여러브라우저에서 공통사용됨!!)
        $('html, body').animate({
          scrollLeft: pgpos + 'px',
        }, 800, "easeOutCirc") ///// animate /////
        // stop() 사용하여 여러개를 클릭했을때 마지막 선택만 남아서 처리하도록 중간에 쌓    인 애니메이션 지움!!!!
        // 4. GNB메뉴에 class="on" 넣어 선택된 메뉴표시 a요소의 li에 class="on"으로    넣으면  이미 셋팅된 css의 디자인이 적용되어 라임색 윗줄의 크기가 조금 커진 디    자인이 적용된다 마우스 오버시와 동일 디자인이 유지된다!! 이것을 표시하는 이      .유는 현재 페이지가 무엇인지 표시하기 위함이다!!
        // this 나 자신에서 위로 올라가 li를 선택함!!
        // 두개의 네빗게이션을 동시에 변경하기!!!!

        // 클릭된 순번 알아내기(클릭된 a의 부모 li순번 알아내기)
        let idx = $(this).parent().index();
        console.log('클릭순번:' + idx);

        // GNB네비게이션 클래스 넣기
        $('.gnb li').eq(idx).addClass('on')
          .siblings().removeClass('on')

        // 블릿네비게이션 클래스 넣기
        $('.bnav li').eq(idx).addClass('on')
          .siblings().removeClass('on')

        // 스크롤 페이지 전역변수에 순번반영해야함~~~
        pno = idx //// 매우중요!!!

      }) ///// click /////




    }) ///// jQB ////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////
  