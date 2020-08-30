import * as Sentry from '@sentry/react';

export default class Api {
  static scheme = 'http';

  static host = 'localhost';

  static port = '3000';

  static version = 'v1';

  static URL(path: string) {
    return `${this.scheme}://${this.host}:${this.port}/${this.version}${path}`;
  }

  static get(path: string, signal?: AbortSignal, headers?: any): Promise<any> {
    return fetch(this.URL(path), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        ...headers,
      },
      signal,
    })
      .then((response) => {
        if (response.ok) return response.json();
        return response;
      })
      .catch((error) => Sentry.captureException(error));
  }

  static post(path: string, body: any): Promise<any> {
    return fetch(this.URL(path), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) return response.json();
        return response;
      })
      .catch((error) => Sentry.captureException(error));
  }

  static delete(path: string, signal?: AbortSignal): Promise<any> {
    return fetch(this.URL(path), {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
        return response;
      })
      .catch((error) => Sentry.captureException(error));
  }
}
