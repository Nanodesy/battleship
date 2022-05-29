package io.github.nanodesy.backend.uitls.jackson;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import io.github.nanodesy.backend.config.SecurityConfig;
import org.springframework.stereotype.Component;

import java.io.IOException;


public class PasswordDeserializer extends JsonDeserializer<String> {
    @Override
    public String deserialize(JsonParser jsonParser,
                              DeserializationContext deserializationContext) throws IOException {
        ObjectCodec objectCodec = jsonParser.getCodec();
        JsonNode node = objectCodec.readTree(jsonParser);
        return SecurityConfig.PASSWORD_ENCODER.encode(node.asText());
    }
}
