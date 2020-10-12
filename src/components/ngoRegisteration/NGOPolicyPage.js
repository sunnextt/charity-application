import React from "react";
// import { Link } from "react-router-dom";

export default function RegistarPolicy() {
  return (
    <div className="registration" id="register policy">
      <div className="registration-policy">
        <h3 className="heading-secondary-2 registration-policy-header">
          registration policy
        </h3>
        <p className="paragraph-policy" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          urna lectus, mollis vel fermentum quis, condimentum id orci. Integer
          aliquam risus ut nunc convallis, eu pulvinar massa blandit. Ut a eros
          at turpis interdum semper ultricies a ante. Maecenas faucibus enim sit
          amet dui euismod fringilla. Nunc blandit sodales consectetur.
          Suspendisse eu nisl convallis, fringilla dui rutrum, maximus dui. Ut
          sollicitudin est id erat vehicula viverra. Aliquam erat volutpat.
          Donec dolor ante, pretium sit amet lacinia quis, placerat vel ipsum.
          Maecenas vehicula neque velit, id pulvinar lectus consectetur a.
          Suspendisse non ultricies ante, ac maximus nisl. In hac habitasse
          platea dictumst. In hac habitasse platea dictumst. Nullam id odio non
          eros aliquet tristique. Pellentesque ut luctus ante, fermentum aliquet
          justo. Integer gravida erat diam. Aliquam consectetur eleifend massa
          sed convallis. Donec tincidunt lobortis nulla sit amet consequat.
          Donec lobortis tortor sem, pulvinar dictum erat convallis quis. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aliquam in dictum leo. Proin sit amet tellus id quam
          porta vestibulum. Quisque condimentum felis sit amet elementum luctus.
          Integer cursus dictum nunc, sodales dictum erat consectetur in. Aenean
          dui ex, malesuada eu turpis feugiat, sodales elementum odio. Quisque
          iaculis maximus tortor, in tincidunt ex viverra maximus. Integer sit
          amet dui est. Donec id pharetra est. Morbi et libero dolor. Curabitur
          congue urna sed quam hendrerit, sed sagittis libero convallis. Mauris
          tellus augue, pellentesque et lacinia non, commodo id tellus. In
          convallis metus quis purus tristique faucibus. Donec tincidunt, ante
          suscipit finibus auctor, ex nisl lacinia dui, viverra tincidunt augue
          arcu non leo. Phasellus pretium gravida ante. Aenean eget vulputate
          sem, vel pretium risus. Sed ac augue hendrerit, lobortis leo sit amet,
          efficitur tellus. Vestibulum dignissim tincidunt pharetra. Mauris vel
          ligula leo. Morbi imperdiet, augue a pulvinar vestibulum, est dolor
          facilisis velit, id ultricies dui felis ac tellus. Mauris metus
          ligula, maximus in porta nec, lobortis in mi. Nullam finibus gravida
          lacus, sit amet lacinia massa sodales ac. Aenean commodo aliquet
          tellus, eu dictum elit dapibus sed. Suspendisse aliquam felis et lorem
          viverra suscipit. Duis congue rutrum tortor, a posuere ligula
          imperdiet vel. Suspendisse ullamcorper erat nunc, non gravida purus
          blandit eu. Vestibulum tempus nec sem laoreet posuere. Suspendisse
          vestibulum vulputate nulla, ullamcorper consequat ipsum luctus nec.
          Etiam sed maximus dolor. Phasellus lacinia orci commodo libero rhoncus
          pulvinar. Sed accumsan odio in nibh accumsan, vel dapibus nibh
          hendrerit. Etiam magna nisi, vehicula quis odio non, pellentesque
          ullamcorper erat. Phasellus suscipit, libero quis tristique ultricies,
          elit quam condimentum libero, scelerisque scelerisque quam odio eget
          nisi. Nullam accumsan mauris nec accumsan elementum. Maecenas euismod
          turpis ut lorem ornare volutpat. Cras nec tempor ante, eget venenatis
          ex. In suscipit dolor lacus.
        </p>
      </div>
      <div className="form-policy-agreement">
        <form action="submit">
          <input type="checkbox" name="agreement" required/>
          <label htmlFor="agreement">I agree to these terms and conditions</label>
          <a href="/registration_contact" type="submit" className="btn btn__green btn__animated">Register</a>
        </form>
      </div>
    </div>
  );
}
