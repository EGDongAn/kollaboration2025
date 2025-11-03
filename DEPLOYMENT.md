# Cloudflare Pages 배포 가이드

## 📋 사전 준비

1. GitHub 계정
2. Cloudflare 계정 (무료)
3. 이 저장소

## 🚀 1단계: GitHub에 저장소 생성 및 Push

### GitHub에서 새 저장소 생성

1. [GitHub](https://github.com/new)에서 새 저장소 생성
2. 저장소 이름 입력 (예: `kpcs-ksfm-2025`)
3. Public 또는 Private 선택
4. **Do NOT initialize with README** (이미 로컬에 파일이 있으므로)
5. "Create repository" 클릭

### 로컬 저장소를 GitHub에 연결

터미널에서 실행:

```bash
# 원격 저장소 추가
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 브랜치 이름을 main으로 설정
git branch -M main

# GitHub에 push
git push -u origin main
```

**예시:**
```bash
git remote add origin https://github.com/egskin/kpcs-ksfm-2025.git
git branch -M main
git push -u origin main
```

## ☁️ 2단계: Cloudflare Pages 설정

### Cloudflare 계정 생성 (처음이라면)

1. [Cloudflare](https://cloudflare.com) 방문
2. "Sign up" 클릭
3. 이메일과 비밀번호로 계정 생성
4. 이메일 인증

### Cloudflare Pages에 배포

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) 로그인

2. 왼쪽 메뉴에서 **"Workers & Pages"** 클릭

3. **"Create application"** 버튼 클릭

4. **"Pages"** 탭 선택

5. **"Connect to Git"** 클릭

6. **GitHub 연동**:
   - "Connect GitHub" 클릭
   - GitHub 로그인 및 권한 승인
   - 저장소 선택 (All repositories 또는 특정 저장소만)
   - "Install & Authorize" 클릭

7. **저장소 선택**:
   - 방금 만든 저장소 선택 (예: `kpcs-ksfm-2025`)
   - "Begin setup" 클릭

8. **빌드 설정**:
   ```
   Project name: kpcs-ksfm-2025 (또는 원하는 이름)
   Production branch: main
   Framework preset: None
   Build command: (비워두기)
   Build output directory: /
   ```

9. **환경 변수**: 필요 없음 (건너뛰기)

10. **"Save and Deploy"** 클릭

## ✅ 3단계: 배포 완료

배포가 시작됩니다. 보통 1-2분 소요:

1. 빌드 로그를 실시간으로 볼 수 있습니다
2. 성공하면 **"Success! Your site is live!"** 메시지 표시
3. 배포된 URL 확인:
   ```
   https://kpcs-ksfm-2025.pages.dev
   ```

## 🌐 4단계: 커스텀 도메인 설정 (선택사항)

자신의 도메인이 있다면:

1. Pages 프로젝트 페이지에서 **"Custom domains"** 탭 클릭
2. **"Set up a custom domain"** 클릭
3. 도메인 입력 (예: `conference.yourdomain.com`)
4. DNS 레코드 추가 안내 따르기
   - CNAME 레코드 추가: `conference` → `kpcs-ksfm-2025.pages.dev`
5. SSL 인증서는 자동으로 발급됩니다

## 🔄 자동 배포

이제 GitHub에 push할 때마다 자동으로 배포됩니다:

```bash
# 파일 수정 후
git add .
git commit -m "Update conference schedule"
git push

# Cloudflare Pages가 자동으로 감지하고 재배포합니다
```

## 📊 배포 관리

Cloudflare Pages 대시보드에서:

- **Deployments**: 모든 배포 기록 확인
- **Analytics**: 방문자 통계
- **Settings**: 환경 변수, 빌드 설정 등
- **Custom domains**: 도메인 관리

## 🔍 문제 해결

### 배포가 실패하는 경우

1. **빌드 로그 확인**: Cloudflare 대시보드에서 에러 메시지 확인
2. **파일 경로 확인**: 모든 HTML 파일이 루트 디렉토리에 있는지 확인
3. **Git 상태 확인**:
   ```bash
   git status
   git log --oneline
   ```

### fetch API가 작동하지 않는 경우

- Cloudflare Pages는 HTTP/HTTPS로 서빙되므로 CORS 문제 없음
- 로컬 `file://` 프로토콜에서만 발생하는 문제

### 업데이트가 반영되지 않는 경우

1. Cloudflare 대시보드에서 최신 배포 확인
2. 브라우저 캐시 삭제 (Ctrl+Shift+R 또는 Cmd+Shift+R)
3. Cloudflare 캐시 purge:
   - "Caching" → "Configuration" → "Purge Everything"

## 💡 유용한 팁

### Preview Deployments

- PR(Pull Request)을 만들면 자동으로 preview URL 생성
- `https://abc123.kpcs-ksfm-2025.pages.dev` 형식
- 메인 사이트에 영향 없이 테스트 가능

### Rollback

이전 버전으로 되돌리기:
1. Cloudflare 대시보드 → "Deployments"
2. 이전 성공한 배포 찾기
3. "..." 메뉴 → "Rollback to this deployment"

### Branch Deployments

다른 브랜치도 자동 배포:
- `main` 브랜치: 프로덕션 (your-site.pages.dev)
- 다른 브랜치: 자동 preview URL 생성

## 📞 지원

- [Cloudflare Pages 문서](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)
- [GitHub Issues](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/issues)

## 🎉 완료!

이제 웹사이트가 전 세계 어디서나 빠르게 접근 가능합니다!

**배포 URL**: `https://your-project.pages.dev`
