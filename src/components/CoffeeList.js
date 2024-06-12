import { useState } from "react";
import { Link } from "react-router-dom";

export default function CoffeeList() {
    let coffeeArray = [
        {
            title : "에스프레소", 
            body: 
            "에스프레소란? 에스프레소는 이탈리아에서 탄생한 커피 음료로, 작고 진한 풍미를 가지고 있습니다. 이 작은 컵 한 잔의 커피에는 매우 진한 향과 풍미가 담겨있어 커피 애호가들 사이에서 큰 인기를 끌고 있습니다. \
            고압 추출로 탄생한 작은 커피 에스프레소는 고압으로 추출된 커피로 만들어집니다. 원두를 곱게 간 다음 에스프레소 머신을 사용하여 뜨거운 물을 고압으로 통과시켜 작은 양의 커피를 추출합니다. 이러한 고압 추출 과정은 커피의 향과 풍미를 극대화시키는 역할을 합니다.\
            "
        }, 
        {
            title: "아메리카노",
            body:
            "\
            아메리카노는 에스프레소에 물을 추가하여 희석한 커피 음료입니다. 이 음료는 에스프레소의 진한 맛을 더 부드럽게 즐기기 위해 탄생한 것으로 알려져 있습니다. 아메리카노는 이름 그대로 미국에서 특히 인기가 많은 음료입니다.\
            "
        },
        {
            title:"라떼",
            body:
            "\
            라떼는 에스프레소에 스팀밀크를 추가하여 만든 커피 음료입니다. 이 음료는 부드럽고 크리미한 맛과 진한 커피 풍미가 어우러져 많은 사람들에게 사랑받고 있습니다. 라떼는 에스프레소와 스팀밀크의 조화로운 조합으로 알려져 있습니다.\
            "
        },
        {
            title:"카푸치노",
            body:
            "\
            카푸치노는 에스프레소, 스팀밀크, 우유 거품으로 이루어진 커피 음료입니다. 이 음료는 다채로운 맛과 부드러운 텍스처를 가지고 있어 많은 커피 애호가들에게 사랑받고 있습니다. 카푸치노는 에스프레소의 진한 맛과 우유의 부드러움이 조화를 이루는 특별한 음료로 알려져 있습니다.\
            "
        }
    ]
    
    return (
        <div className="post__list">
        {coffeeArray.map((e, index)=>(
            <div key={index} className="post__unit">
            <div className="post__box">
                <div className="flex__box-ps">
                    <Link to={`/posts/${index}`}>
                        <div className="post__image"/>
                    </Link>
                    <div className="post__description">
                        <div className="post__coffeeName">{e.title}</div>
                        <div className="post__text">
                            {e.body}
                       </div>
                    </div>

                </div>
            </div>
            <div className="post__util-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
            </div>
        </div> 
        ))}
        </div>

    );
}