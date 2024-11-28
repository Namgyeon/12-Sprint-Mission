import SubTitle from "./../components/SubTitle";
import "./AddItemPage.css";
import removeIcon from "./../assets/icon_remove.svg";
import FileInput from "./../components/FileInput";
import { useState, useEffect, useRef } from "react";

const AddItemPage = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    introduce: "",
    price: "",
    imgFile: null,
    tag: "",
  });

  const handleChange = (name, value) => {
    if (name === "price") {
      const priceValue = value.replaceAll(",", "");
      const nextPrice = Number(priceValue) || 0;
      setInputValue((prev) => ({
        ...prev,
        [name]: nextPrice.toLocaleString(),
      }));
    } else if (name === "tag") {
      setInputValue((prev) => ({
        ...prev,
        [name]: prev[name] ? `${prev[name]}|${value}` : value,
      }));
    } else {
      setInputValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    //e.preventDefault();
  };

  const [fakeTag, setFakeTag] = useState("");

  const handleFakeTag = (e) => {
    setFakeTag(e.target.value);
  };

  const handleTagChange = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleChange("tag", fakeTag);
      e.target.value = "";
      setFakeTag("");
    }
  };

  const tagList = inputValue.tag.split("|");

  const handleTagRemove = (tagName) => {
    setInputValue((prev) => {
      const tagUpdate = prev.tag
        .split("|")
        .filter((tag) => tag !== tagName)
        .join("|");

      return {
        ...prev,
        tag: tagUpdate,
      };
    });
  };

  const [submitCheck, setSubmitCheck] = useState(true);
  useEffect(() => {
    if (inputValue.name && inputValue.introduce && inputValue.price && inputValue.price !== "0" && inputValue.tag) {
      setSubmitCheck(false);
    } else {
      setSubmitCheck(true);
    }
  }, [inputValue]);

  return (
    <form onSubmit={handleSubmit}>
      <main className="main">
        <div className="inner">
          <div className="tit_box">
            <SubTitle name="상품 등록하기" />
            <div className="add_submit">
              <button type="submit" className="btn_blue sml" disabled={submitCheck}>
                등록
              </button>
            </div>
          </div>
          <div className="add_form">
            <ul className="add_form_list">
              <li>
                <div htmlFor="add_img" className="title">
                  상품이미지
                </div>
                <div className="input_box input_file_box">
                  <FileInput name="imgFile" value={inputValue.imgFile} onChange={handleChange} />
                </div>
              </li>
              <li>
                <label htmlFor="add_name" className="title">
                  상품명
                </label>
                <div className="input_box">
                  <input type="text" id="add_name" name="name" className="inp_reset" value={inputValue.name} onChange={handleInputChange} placeholder="상품명을 입력해주세요" />
                </div>
              </li>
              <li>
                <label htmlFor="add_introduce" className="title">
                  상품 소개
                </label>
                <div className="input_box">
                  <textarea id="add_introduce" name="introduce" className="inp_reset" value={inputValue.introduce} onChange={handleInputChange} placeholder="상품 소개를 입력해주세요"></textarea>
                </div>
              </li>
              <li>
                <label htmlFor="add_price" className="title">
                  판매가격
                </label>
                <div className="input_box">
                  <input type="text" id="add_price" name="price" className="inp_reset" value={inputValue.price} onChange={handleInputChange} placeholder="판매 가격을 입력해주세요" />
                </div>
              </li>
              <li>
                <label htmlFor="add_tag" className="title">
                  태그
                </label>
                <div className="input_box">
                  <input type="text" id="add_tag" className="inp_reset" placeholder="태그를 입력해주세요" onKeyDown={handleTagChange} onChange={handleFakeTag} value={fakeTag} />
                </div>

                {inputValue.tag && (
                  <ul className="tag_list">
                    {tagList.map((el, idx) => (
                      <li key={idx}>
                        <span>#{el}</span>
                        <button type="button" className="btn_reset remove" onClick={() => handleTagRemove(el)}>
                          <img src={removeIcon} alt={`${el} 삭제하기`} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </main>
    </form>
  );
};

export default AddItemPage;
