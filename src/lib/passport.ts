import passport from 'passport';
import passportSteam from 'passport-steam';

const SteamStrategy = passportSteam.Strategy;

export interface SteamProfile {
  displayName: string;
  id: string;
  identifier: string;
  photos: Image;
  provider: string;
}

interface Image {
  value: string;
}
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj: SteamProfile, done) {
  done(null, obj);
});

passport.use(
  new SteamStrategy(
    {
      returnURL: `${process.env.DOMAIN}/api/auth/return`,
      realm: `${process.env.DOMAIN}`,
      apiKey: `${process.env.STEAM_API_KEY}`,
    },
    function (identifier: string, profile: any, done: (error: any, user?: any) => void) {
      // Пример обработки профиля и вызова done
      const user = {
        id: profile.id,
        displayName: profile.displayName,
        photos: profile.photos,
        provider: profile.provider,
        // Убедитесь, что все необходимые поля из SteamProfile здесь заполнены
      };

      // Возможно, вам нужно будет адаптировать profile к вашему интерфейсу SteamProfile
      return done(null, user); // Передайте обработанный профиль в done
    }
  )
);

export default passport;
