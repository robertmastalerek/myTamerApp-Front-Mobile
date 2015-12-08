/**
 * Created by Robert Mastalerek on 16.11.2015.
 */
angular.module('starter.services', ['ngResource', 'ngCookies', 'constants'])

  .factory('Auth', function ($cookieStore) {
    var _user = $cookieStore.get('starter.user');
    var setUser = function (user) {
      _user = user;
      $cookieStore.put('starter.user', _user);
    };

    return {
      setUser: setUser,
      isLoggedIn: function () {
        return _user ? true : false;
      },
      getUser: function () {
        return _user.username;
      },
      logout: function () {
        $cookieStore.remove('starter.user');
        _user = null;
      }
    }
  });

/* ------------------------------------------------------------- */
/* ----------------------- Activities -------------------------- */
/* ------------------------------------------------------------- */
angular.module('activity.services', ['ngResource'])

  .factory('Activity', function ($resource) {
    return $resource('http://localhost:5000/activities/:activityId');
  });

/* ------------------------------------------------------------- */
/* -------------------------- Beacons -------------------------- */
/* ------------------------------------------------------------- */
angular.module('beacons.services', ['ngCordovaBeacon']);

