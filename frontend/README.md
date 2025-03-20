# 네이버 카페 프론트엔드

## 공통 컴포넌트 구조

프로젝트의 재사용 가능한 공통 컴포넌트는 `src/components/common` 디렉토리에 위치하고 있습니다. 이 컴포넌트들은 애플리케이션 전체에서 일관된 UI와 사용자 경험을 제공하기 위해 설계되었습니다.

### 공통 컴포넌트 목록

- **PageHeader**: 페이지 상단에 표시되는 제목, 부제목, 상태 배지, 액션 버튼이 포함된 헤더 컴포넌트
- **DataTable**: 데이터 목록을 표시하기 위한 테이블 컴포넌트 (선택 가능 행, 로딩 상태 등 지원)
- **StatusBadge**: 상태를 시각적으로 표현하는 배지 컴포넌트 (성공, 경고, 오류, 정보, 대기 상태 등 표시)
- **FormField**: 라벨과 입력 필드가 포함된 폼 컴포넌트 (오류 메시지 표시 기능 포함)
- **LoadingState**: 데이터 로딩 중임을 나타내는 로딩 인디케이터 컴포넌트
- **Alert**: 사용자에게 알림 메시지를 표시하는 컴포넌트 (성공, 경고, 오류, 정보 유형 지원)
- **ConfirmDialog**: 사용자에게 확인을 요청하는 대화 상자 컴포넌트
- **Empty**: 데이터가 없는 상태를 표시하는 컴포넌트
- **Pagination**: 페이지네이션 기능을 제공하는 컴포넌트
- **SearchInput**: 검색 기능이 있는 입력 필드 컴포넌트
- **Card**: 콘텐츠를 카드 형태로 표시하는 컴포넌트

### 사용 방법

공통 컴포넌트는 다음과 같이 임포트하여 사용할 수 있습니다:

```tsx
import { PageHeader, DataTable, StatusBadge } from '@/components/common';

// 예시 사용
<PageHeader
  title="페이지 제목"
  subtitle="페이지 부제목"
  badge={{ text: "활성", type: "success" }}
  action={{ label: "새로 만들기", onClick: handleCreate }}
/>
```

## 개발 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

### 린트 실행

```bash
npm run lint
```
