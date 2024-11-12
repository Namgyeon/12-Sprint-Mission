/**
 * 폼내부 password type 요소의 visibility를 토글하는 함수입니다.
 * 지정된 폼 내에서 .visibility-btn 클래스를 가진 버튼을 클릭할 때마다 비밀번호 필드의 type을
 * password <-> text로 토글합니다.
 *
 * @param {string} form  - 폼의 선택자 (기본값: "body", 예: ".form").
 */
export function toggleVisibility(form = "body") {
  document.querySelector(form).addEventListener("click", (e) => {
    const button = e.target.closest(".visibility-btn");

    if (!button) return;
    const input = button.closest(".form-item").querySelector("input");
    const isPasswordType = input.type === "password";

    input.type = isPasswordType ? "text" : "password";
    button.classList.toggle("on");
  });
}
