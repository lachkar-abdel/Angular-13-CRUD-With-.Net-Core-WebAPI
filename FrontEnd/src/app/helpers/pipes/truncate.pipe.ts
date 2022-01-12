import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'truncate',
  pure: false,
})
@Injectable()
export class TruncatePipe implements PipeTransform {
  /**
   *
   * @param text List of items to truncate
   * @param limit  string max length
   * @param complete Flag to truncate at the nearest complete word, instead of character
   * @param ellipsis appended trailing suffix
   *
   */
  static truncate(
    text: string,
    limit: number,
    complete: boolean = false,
    ellipsis: string
  ): string {
    if (complete) {
      limit = text.substr(0, limit).lastIndexOf(' ');
    }
    return text.length > limit ? text.substr(0, limit) + ellipsis : text;
  }

  transform(
    text: string,
    limit: number,
    complete: boolean = false,
    ellipsis: string = '...'
  ): any {
    if ((text && text.length <= limit) || !text) {
      return text;
    }

    return TruncatePipe.truncate(text, limit, complete, ellipsis);
  }
}