import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Box,
  Divider,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik, Form } from "formik";
import fondo from "../assets/fondo.png";
import logo from "../assets/logo.png";
import ABMActionButton from "../components/ABMActionButton";
import ABMInputComponent from "../components/ABMInputComponent";
import { UserContext } from "../context/UserContext";
import { loginSchema } from "../schemas";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      await loginUser({
        email: values.email.trim(),
        password: values.password,
      });
      resetForm();
    } catch (error) {
      console.error("Error al loguear usuario:", error); // Por ahora mostramos el error por consola por comodidad
    } finally {
      setSubmitting(false);
    }
  };

  // Función para controlar la visibilidad de la contraseña
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "space-between",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: 3,
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Imagen en el lado izquierdo */}
      <Box
        component="img"
        src={fondo}
        alt="Imagen de bienvenida"
        sx={{
          width: "60vw",
          height: "100vh",
        }}
      />
      <Box
        sx={{
          width: "60vw",
          height: "100vh",
          padding: 4,
          paddingBottom: 10,
          paddingTop: 12,
        }}
      >
        {/* Contenedor para centrar la imagen */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Imagen de bienvenida"
            sx={{
              width: "100px",
              height: "100px",
              borderRadius: "50px",
              boxShadow: 5,
              mt: 4,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />
        </Box>

        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontFamily: "Poppins", color: "#283b54" }}
        >
          Iniciar Sesión
        </Typography>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          validateOnBlur={true}
          validateOnChange={true}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Box mb={2}>
                <ABMInputComponent
                  label="Correo Electrónico"
                  name="email"
                  type="text"
                />
              </Box>

              <Box mb={2}>
                <ABMInputComponent
                  label="Contraseña"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <ABMActionButton
                is={isSubmitting}
                accion={"Iniciar Sesión"}
                tipoClase=""
                ancho="50%"
              />
            </Form>
          )}
        </Formik>
        <Divider sx={{ mb: 3, borderColor: "#233349" }}>ó</Divider>
        <ABMActionButton
          is={false}
          accion={"Registrarse"}
          tipoClase=""
          ancho="50%"
          onClick={() => navigate("/register")}
        />
      </Box>
    </Box>
  );
};
