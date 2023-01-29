export const API_URL = 'https://dogsapi.origamid.dev/json'

export function TOKEN_POST(body: { username: string; password: string }) {
  return {
    url: `${API_URL}/jwt-auth/v1/token`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function TOKEN_VALIDATE_POST(token: string) {
  return {
    url: `${API_URL}/jwt-auth/v1/token/validate`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  }
}

export function USER_GET(token: string) {
  return {
    url: `${API_URL}/api/user`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  }
}

export function USER_POST(body: { username: string; password: string; email: string; }) {
  return {
    url: `${API_URL}/api/user`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function PHOTO_POST(formData: any, token: any) {
  return {
    url: `${API_URL}/api/photo`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    }
  }
}

export function PHOTOS_GET({page, total, user}: any) {
  return {
    url: `${API_URL}/api/photo/?_page=${page}&total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store'
    }
  }
}

export function PHOTO_GET(id: any) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: 'GET',
    }
  }
}

export function PHOTO_DELETE(id: any, token: string | null) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      },
    }
  }
}

export function COMMENT_POST(id: any, body: any, token: string | null) {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body)
    },
  }
}

export function PASSWORD_LOST_POST(body: any,) {
  return {
    url: `${API_URL}/api/password/lost`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    },
  }
}

export function PASSWORD_RESET_POST(body: any,) {
  return {
    url: `${API_URL}/api/password/reset`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    },
  }
}
