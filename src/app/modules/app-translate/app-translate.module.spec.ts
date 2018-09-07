import { AppTranslateModule } from './app-translate.module';

describe('AppTranslateModule', () => {
  let appTranslateModule: AppTranslateModule;

  beforeEach(() => {
    appTranslateModule = new AppTranslateModule();
  });

  it('should create an instance', () => {
    expect(appTranslateModule).toBeTruthy();
  });
});
