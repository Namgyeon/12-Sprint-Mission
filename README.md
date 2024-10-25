### git 커맨드

- git init : 현재 디렉토리를 Git이 관리하는 프로젝트 디렉토리(=working directory)로 설정하고 그 안에 레포지토리(.git 디렉토리) 생성
- git config user.name 'codeit' : 현재 사용자의 아이디를 'codeit'으로 설정(커밋할 때 필요한 정보)
- git config user.email 'teacher@codeit.kr' : 현재 사용자의 이메일 주소를 'teacher@codeit.kr'로 설정(커밋할 때 필요한 정보)
- git add [파일 이름] : 수정사항이 있는 특정 파일을 staging area에 올리기
- git add [디렉토리명] : 해당 디렉토리 내에서 수정사항이 있는 모든 파일들을 staging area에 올리기
- git add . : working directory 내의 수정사항이 있는 모든 파일들을 staging area에 올리기
- git reset [파일 이름] : staging area에 올렸던 파일 다시 내리기
- git status : Git이 현재 인식하고 있는 프로젝트 관련 내용들 출력(문제 상황이 발생했을 때 현재 상태를 파악하기 위해 활용하면 좋음)
- git commit -m "커밋 메시지" : 현재 staging area에 있는 것들 커밋으로 남기기
- git help [커맨드 이름] : 사용법이 궁금한 Git 커맨드의 공식 메뉴얼 내용 출력
