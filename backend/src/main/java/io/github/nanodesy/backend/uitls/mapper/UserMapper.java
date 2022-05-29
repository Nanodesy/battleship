package io.github.nanodesy.backend.uitls.mapper;

import io.github.nanodesy.backend.entity.UserEntity;
import io.github.nanodesy.backend.model.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User map(UserEntity userEntity);

    UserEntity map(User user);
}
